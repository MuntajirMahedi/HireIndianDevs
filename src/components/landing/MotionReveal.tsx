import { motion, useInView, Variant } from "framer-motion";
import { useRef, ReactNode } from "react";

type AnimationPreset = "fadeUp" | "fadeDown" | "fadeIn" | "scaleUp" | "slideInRight" | "slideInLeft";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  preset?: AnimationPreset;
  once?: boolean;
  amount?: number | "all" | "some";
}

const presets: Record<AnimationPreset, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  }
};

export const MotionReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
  preset = "fadeUp",
  once = true,
  amount = 0.2
}: MotionRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={presets[preset]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: duration * 1.2 }
      }}
    >
      {children}
    </motion.div>
  );
};

export const MotionStagger = ({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  amount = 0.1
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  amount?: number | "all" | "some";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
