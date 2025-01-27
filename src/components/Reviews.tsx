'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Developer",
      content: "Completely transformed our code review process. We saved hours of work."
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Tech Lead",
      content: "The suggestions are precise and educational. It helped the team grow a lot."
    }
  ];

  return (
    <motion.section
      className="container mx-auto px-4 py-20"
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="reviews"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        variants={fadeIn}
      >
        What Our Users Say
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900 border-gray-800 text-whtie hover:border-purple-500/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <motion.div
                      key={`star-${review.id}-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                    </motion.div>
                  ))}
                </div>
                <CardContent className="pt-4 px-0">
                  <p className="text-gray-400">{review.content}</p>
                  <div className="mt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Reviews;
