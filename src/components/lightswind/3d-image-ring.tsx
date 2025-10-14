"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { cn } from "../lib/utils";

export interface ThreeDImageRingProps {
  /** Array of image URLs to display in the ring */
  images: string[];
  /** Container width in pixels (will be scaled) */
  width?: number;
  /** 3D perspective value */
  perspective?: number;
  /** Distance of images from center (z-depth) */
  imageDistance?: number;
  /** Initial rotation of the ring */
  initialRotation?: number;
  /** Animation duration for entrance */
  animationDuration?: number;
  /** Stagger delay between images */
  staggerDelay?: number;
  /** Hover opacity for non-hovered images */
  hoverOpacity?: number;
  /** Custom container className */
  containerClassName?: string;
  /** Custom ring className */
  ringClassName?: string;
  /** Custom image className */
  imageClassName?: string;
  /** Background color of the stage */
  backgroundColor?: string;
  /** Enable/disable drag functionality */
  draggable?: boolean;
}

const ThreeDImageRing: React.FC<ThreeDImageRingProps> = ({
  images,
  width = 400,
  perspective = 1000,
  imageDistance = 300,
  initialRotation = 0,
  animationDuration = 0.8,
  staggerDelay = 0.1,
  hoverOpacity = 0.3,
  containerClassName,
  ringClassName,
  imageClassName,
  backgroundColor = "transparent",
  draggable = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationX = useMotionValue(0);
  const rotationY = useMotionValue(initialRotation);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const imagePositions = useMemo(() => {
    return images.map((_, index) => {
      const angle = (index / images.length) * 360;
      return {
        rotateY: angle,
        translateZ: imageDistance,
      };
    });
  }, [images.length, imageDistance]);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { delta: { x: number; y: number } }
  ) => {
    if (!draggable) return;

    rotationY.set(rotationY.get() + info.delta.x * 0.5);
    rotationX.set(rotationX.get() - info.delta.y * 0.5);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative", containerClassName)}
      style={{
        width,
        height: width,
        perspective,
        backgroundColor,
      }}
    >
      <motion.div
        className={cn("relative w-full h-full", ringClassName)}
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotationX,
          rotateY: rotationY,
        }}
        drag={draggable}
        onDrag={handleDrag}
        dragElastic={0.1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                imageClassName
              )}
              style={{
                transformStyle: "preserve-3d",
                ...imagePositions[index],
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotateY: imagePositions[index].rotateY,
                translateZ: 0,
              }}
              animate={{
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index
                    ? hoverOpacity
                    : 1,
                scale: 1,
                rotateY: imagePositions[index].rotateY,
                translateZ: imageDistance,
              }}
              transition={{
                type: "tween", // Fixed: use "tween" instead of "inertia"
                duration: animationDuration,
                delay: index * staggerDelay,
                ease: "easeOut", // Use as string, not imported function
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt={`Ring image ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg shadow-lg"
                style={{
                  transform: `rotateY(${-imagePositions[index].rotateY}deg)`,
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThreeDImageRing;
