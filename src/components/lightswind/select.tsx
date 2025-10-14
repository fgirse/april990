import * as React from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "../lib/utils"; // Assuming you have this utility function
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectItem, SelectLabel, SelectSeparator } from "@radix-ui/react-select";

interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SelectContext = React.createContext<SelectContextType | undefined>(
  undefined
);

interface SelectProps {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  children,
  defaultValue = "",
  value,
  onValueChange,
  defaultOpen = false,
  open,
  onOpenChange,
  disabled = false,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(
    value || defaultValue
  );
  const [isOpen, setIsOpen] = React.useState(open || defaultOpen);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  React.useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setSelectedValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [onValueChange, value]
  );

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (disabled) return;

      if (open === undefined) {
        setIsOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [onOpenChange, open, disabled]
  );

  return (
    <SelectContext.Provider
      value={{
        value: selectedValue,
        onValueChange: handleValueChange,
        open: isOpen,
        setOpen: handleOpenChange,
        triggerRef,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

const SelectGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className="px-1 py-1.5" {...props}>
      {children}
    </div>
  );
};
SelectGroup.displayName = "SelectGroup";

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, children, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    if (!context) {
      throw new Error("SelectValue must be used within a Select");
    }
    // This is a bit of a hack to get the children from the parent Select component.
    // A better implementation would involve passing a map of values to display labels via context.
    // For simplicity, we are assuming children are passed directly or can be inferred.
    const parentChildren =
      (context as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        ?.children || children;

    let displayValue: React.ReactNode = null;

    const findDisplayValue = (nodes: React.ReactNode) => {
      React.Children.forEach(nodes, (node) => {
        if (!React.isValidElement(node)) return;
        if (displayValue) return;

        // Check if it's a SelectItem
        if (
          (node.type as any).displayName === "SelectItem" &&
          node.props.value === context.value
        ) {
          displayValue = node.props.children;
        }
        // Check if it's a SelectGroup and recurse
        else if ((node.type as any).displayName === "SelectGroup") {
          findDisplayValue(node.props.children);
        }
      });
    };

    findDisplayValue(parentChildren);

    const content = displayValue || context.value || placeholder;

    return (
      <span ref={ref} className={cn("text-sm", className)} {...props}>
        {content || (
          <span className="text-muted-foreground">Select an option</span>
        )}
      </span>
    );
  }
);
SelectValue.displayName = "SelectValue";

interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(SelectContext);
    if (!context) {
      throw new Error("SelectTrigger must be used within a Select");
    }

    const { open, setOpen, triggerRef, searchQuery, setSearchQuery } = context;
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (open && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [open]);

    React.useImperativeHandle(ref, () => triggerRef.current!, [triggerRef]);

    return (
      <button
        ref={triggerRef}
        type="button"
        data-state={open ? "open" : "closed"}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          className
        )}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        {...props}
      >
        {open ? (
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search..."
            className="w-full bg-transparent p-0 text-sm 
    border-none outline-none ring-0 focus:outline-none focus:ring-0 
    active:outline-none active:ring-0"
            style={{ boxShadow: "none" }} // ensure Chrome removes highlight
          />
        ) : (
          children
        )}
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-50 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} />;
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} />;
SelectScrollDownButton.displayName = "SelectScrollDownButton";

// Use Radix Content prop types to avoid conflicting Motion style types
interface SelectContentProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
  "children"
> {
  children: React.ReactNode; // Explicitly define children as standard ReactNode
  position?: "popper" | "item-aligned";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

// Inner component that handles the actual content rendering
const SelectContentInner = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = "popper", align = "start", sideOffset = 4, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={className}
      position={position}
      align={align}
      sideOffset={sideOffset}
      {...props}
    >
      <SelectPrimitive.Viewport>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContentInner.displayName = "SelectContent";

// Export the inner component (Radix UI handles the portal internally)
const SelectContent = SelectContentInner;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
