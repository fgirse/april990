import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

interface SheetContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SheetContext = React.createContext<SheetContextValue | undefined>(undefined);

interface SheetProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Sheet = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange }: SheetProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback((value: React.SetStateAction<boolean>) => {
    if (!isControlled) {
      setUncontrolledOpen(value);
    }

    if (onOpenChange) {
      const nextValue = typeof value === "function" ? value(open) : value;
      onOpenChange(nextValue);
    }
  }, [isControlled, onOpenChange, open]);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ children, asChild, ...props }, forwardedRef) => {
    const { setOpen } = React.useContext(SheetContext) || { setOpen: () => {} };

    // Derive dependencies for the hook before the hook itself.
    // This logic can be conditional as it does not involve hooks.
    const child = asChild ? React.Children.only(children) : null;
    const childRef = child && React.isValidElement(child) ? (child as any).ref : undefined;

    // Call the hook unconditionally at the top level of the component.
    const mergedRef = React.useCallback(
      (node: HTMLElement | null) => {
        // Call the forwarded ref
        if (typeof forwardedRef === 'function') {
          forwardedRef(node as HTMLButtonElement | null);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node as HTMLButtonElement | null;
        }

        // Call the child's original ref
        if (typeof childRef === 'function') {
          childRef(node);
        } else if (childRef) {
          (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      },
      [forwardedRef, childRef]
    );

    if (asChild) {
      if (!React.isValidElement(child)) {
        console.error("SheetTrigger with `asChild` expects a single valid React element child.");
        return null;
      }

      // Use the memoized `mergedRef` inside the conditional block.
      return React.cloneElement(child, {
        ...child.props,
        ...props, // Pass down props like className, etc., to the child
        onClick: (e: React.MouseEvent) => {
          setOpen(true);
          if (child.props.onClick) child.props.onClick(e);
        },
        ref: mergedRef,
      });
    }

    return (
      <button
        ref={forwardedRef}
        type="button"
        onClick={() => setOpen(true)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
SheetTrigger.displayName = "SheetTrigger";


const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  const { setOpen } = React.useContext(SheetContext) || { setOpen: () => { } };

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </button>
  );
});
SheetClose.displayName = "SheetClose";

const SheetPortal = ({ children }: { children: React.ReactNode }) => {
  const { open } = React.useContext(SheetContext) || { open: false };
  return open ? <>{children}</> : null;
};
SheetPortal.displayName = "SheetPortal";

const SheetOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { setOpen } = React.useContext(SheetContext) || { setOpen: () => { } };

  const {
    onDrag: _,
    onDragEnd: __,
    onDragStart: ___,
    onDragExit: ____,
    onDragEnter: _____,
    onDragLeave: ______,
    onDragOver: _______,
    onDrop: ________,
    onAnimationStart: _________,
    ...restProps
  } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed inset-0 z-50 bg-black/80",
        className
      )}
      onClick={() => setOpen(false)}
      {...restProps}
    />
  );
});
SheetOverlay.displayName = "SheetOverlay";

interface SheetContentProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "exit"> {
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const sideVariants = {
  top: {
    initial: { y: "-100%" },
    animate: { y: "0%" },
    exit: { y: "-100%" },
  },
  bottom: {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "100%" },
  },
  left: {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
  },
  right: {
    initial: { x: "100%" },
    animate: { x: "0%" },
    exit: { x: "100%" },
  },
};

// Internal component that renders the sheet content
const SheetContentInner = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SheetContext) || { open: false, setOpen: () => {} };

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex">
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />
        
        <motion.div
          ref={ref}
          className={className}
          {...sideVariants[side]}
          transition={{ type: "spring", damping: 40, stiffness: 400 }}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

SheetContentInner.displayName = "SheetContentInner";

// Main component that handles the portal
const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  (props, ref) => {
    const { open } = React.useContext(SheetContext) || { open: false };
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted || !open) {
      return <div style={{ display: 'none' }} />;
    }

    function setOpen(arg0: boolean): void {
      throw new Error("Function not implemented.");
    }

    return createPortal(
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          
          <motion.div
            className={props.className}
            initial={sideVariants[props.side || "right"].initial}
            animate={sideVariants[props.side || "right"].animate}
            exit={sideVariants[props.side || "right"].exit}
            transition={{ 
              type: "spring", 
              damping: 40, 
              stiffness: 400 
            }}
            {...props}
          >
            {props.children}
          </motion.div>
        </div>
      </AnimatePresence>,
      document.body
    ) as any; // Type assertion to satisfy forwardRef
  }
);

SheetContent.displayName = "SheetContent";

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};