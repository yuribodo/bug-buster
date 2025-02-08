'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


const Pricing = () => {

  const pricingPlans = [
    {
      id: 1,
      name: "Hobby",
      price: "Free",
      description: "For individual developers",
      features: ["5 analyses per month", "Basic suggestions", "Email support"]
    },
    {
      id: 2,
      name: "Pro",
      price: "$49/month",
      description: "For small teams",
      features: ["50 analyses per month", "Advanced analysis", "Priority support", "API Access"]
    },
  ];

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

  return (
    <motion.section
        className="container mx-auto px-4 py-20"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="pricing"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Plans that grow with you
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full hover:border-purple-500/50 text-white transition-colors duration-300">
                <CardHeader>
                  <CardTitle >{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Começar
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
  )
}

export default Pricing
