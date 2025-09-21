"use client";

import Button from "@/shared/ui/Button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function SubscriptionAd() {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto py-4 mt-12 bg-gradient-to-r from-purple-900 via-purple-800 to-slate-800 rounded-2xl shadow-2xl shadow-purple-950 overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative z-10 h-full flex items-center justify-between px-8">
        <div className="flex-1">
          <motion.div
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Icon
                icon="mdi:crown"
                className="text-yellow-400 text-3xl mr-3"
              />
            </motion.div>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Premium Access
            </span>
          </motion.div>

          <motion.h2
            className="text-white text-3xl md:text-4xl font-bold mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Get 10x More
            <motion.span
              className="text-purple-300 block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Viewers!
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-slate-300 text-lg mb-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Unlock premium features and reach thousands more users with our
            subscription plan
          </motion.p>

          <Button
            size="large"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Icon icon="mdi:rocket-launch" className="text-xl" />
            </motion.div>
            <span>Upgrade Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </motion.div>
          </Button>
        </div>

        <motion.div
          className="hidden md:flex flex-col items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center mb-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Icon
                  icon="mdi:eye"
                  className="text-purple-300 text-3xl mr-2"
                />
              </motion.div>
              <motion.span
                className="text-white text-2xl font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                50,000+
              </motion.span>
            </div>
            <p className="text-slate-300 text-center text-sm">
              Monthly Viewers
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "mdi:chart-line", delay: 0 },
              { icon: "mdi:target", delay: 0.1 },
              { icon: "mdi:flash", delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-purple-500/20 p-3 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + item.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Icon icon={item.icon} className="text-purple-300 text-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
