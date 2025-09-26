"use client";
import {CustomLink} from "@/shared/ui";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to Join Our Community?
        </motion.h2>

        <motion.p
          className="text-xl text-purple-100 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Start your social journey today. Create an account in seconds and
          connect with people who matter.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomLink
              color="accent"
              href="/signup"
              variant="solid"
              size="large"
              className=""
            >
              Sign Up Now - It&apos;s Free
            </CustomLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomLink
              color="accent"
              href="/login"
              variant="outline"
              size="large"
              className=""
            >
              Sign In to Your Account
            </CustomLink>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-purple-200 mt-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          No credit card required • Join thousands of active users • Start
          connecting today
        </motion.p>
      </div>
    </motion.section>
  );
}
