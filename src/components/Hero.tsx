'use client';
import { Button } from "@/components/ui/button";
import { Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    className="container mx-auto px-4 py-20 mt-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.div
        className="inline-block bg-purple-500/10 p-2 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      >
        <Code2 className="w-8 h-8 text-purple-500" />
      </motion.div>
      <motion.h1
        className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Elevate your code to the next level
      </motion.h1>
      <motion.p
        className="text-xl text-gray-400 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Advanced AI that analyzes your code, suggests improvements, and helps you write cleaner, safer, and more efficient code.
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Get Started
          <motion.span
            className="ml-2 inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Button>
        <Button className="text-black font-bold hover:text-purple-700" size="lg" variant="outline">
          View Demo
        </Button>
      </motion.div>
    </div>
  </motion.section>
);

export default Hero
