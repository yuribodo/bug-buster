'use client';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <Code2 className="w-6 h-6" />,
    title: "Code Analysis",
    description: "Deep code review with improvement suggestions"
  },
  {
    id: 2,
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    description: "Identify bottlenecks and optimizations"
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Security",
    description: "Detect vulnerabilities and best practices"
  }
];

const Features = () => (
  <motion.section
    id="features"
    className="container mx-auto px-4 py-20"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
            <CardHeader>
              <motion.div
                className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-purple-500"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <CardTitle className="mt-4 text-white">{feature.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Features
