"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AnimatedSection from "@/shared/ui/AnimatedSection";
import StaggeredAnimation from "@/shared/ui/StaggeredAnimation";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <Icon icon="mdi:chat-outline" className="h-12 w-12 text-purple-600" />
      ),
      title: "Share Your Thoughts",
      description:
        "Create and share posts with your community. Express yourself with text, images, and more.",
    },
    {
      icon: (
        <Icon icon="mdi:account-group" className="h-12 w-12 text-blue-600" />
      ),
      title: "Connect with Friends",
      description:
        "Find and connect with people who share your interests. Build meaningful relationships.",
    },
    {
      icon: (
        <Icon icon="mdi:heart-outline" className="h-12 w-12 text-pink-600" />
      ),
      title: "Engage & Comment",
      description:
        "Like, comment, and engage with posts from your network. Join conversations that matter.",
    },
    {
      icon: (
        <Icon
          icon="mdi:bookmark-outline"
          className="h-12 w-12 text-green-600"
        />
      ),
      title: "Save for Later",
      description:
        "Bookmark posts you love and create your personal collection of inspiring content.",
    },
    {
      icon: (
        <Icon
          icon="mdi:account-plus-outline"
          className="h-12 w-12 text-orange-600"
        />
      ),
      title: "Grow Your Network",
      description:
        "Discover new people and expand your social circle with our smart friend suggestions.",
    },
    {
      icon: (
        <Icon icon="mdi:share-variant" className="h-12 w-12 text-teal-600" />
      ),
      title: "Discover Content",
      description:
        "Explore trending posts and discover content tailored to your interests and preferences.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.2} direction="up">
          <div className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Everything You Need to
              <motion.span
                className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Stay Connected
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our platform offers all the tools you need to build meaningful
              connections and share your story with the world.
            </motion.p>
          </div>
        </AnimatedSection>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          itemDelay={0.2}
          direction="up"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="mb-6 transform group-hover:scale-110 transition-transform duration-200"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  );
}
