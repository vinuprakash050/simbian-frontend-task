'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  "Triaged & Reported",
  "Automated Response",
  "Comprehensive Analysis",
  "Accurate Detection",
  "24/7 Coverage"
];

export default function WithSimbian() {
  return (
    <div className="p-6 mt-10 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-6">With Simbian</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-4 rounded shadow text-green-800 font-semibold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.4 }}
          >
            {step}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {["Ignored Alerts", "Wrongly Closed", "Active Threats"].map((title, idx) => (
          <motion.div
            key={idx}
            className="bg-green-200 p-6 rounded-xl w-full max-w-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.5 }}
          >
            <div className="text-xl font-bold text-green-800">{title}</div>
            <div className="text-3xl font-bold text-green-900 mt-2">0</div>
            <CheckCircle className="text-green-600 w-6 h-6 mt-2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}