'use client'

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How does code analysis work?",
      answer: "Our AI analyzes your source code, identifying patterns, potential issues, and opportunities for improvement. You receive a detailed report with practical suggestions."
    },
    {
      id: 2,
      question: "Which languages are supported?",
      answer: "We currently support JavaScript, Python, Java, C++, Ruby, and Go. We are always adding support for more languages."
    },
    {
      id: 3,
      question: "Is it safe to share my code?",
      answer: "Yes! We use end-to-end encryption and do not store your code after analysis. Your intellectual property is safe with us."
    }
  ];

  return (
    <motion.section
        className="container mx-auto px-4 py-20"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="FAQ"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeIn}
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.id} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.section>
  )
}

export default FAQ
