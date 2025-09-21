"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  itemDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
  itemDelay = 0,
}: StaggeredAnimationProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: itemDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index}>{child}</motion.div>
        ))
      ) : (
        <motion.div>{children}</motion.div>
      )}
    </motion.div>
  );
}
