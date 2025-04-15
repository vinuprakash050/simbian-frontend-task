'use client';

import { motion } from 'framer-motion';

type AlertCardProps = {
  title: string;
  count: number;
  icon: React.ReactNode;
  alerts: string[];
};

export default function AlertCard({ title, count, icon, alerts }: AlertCardProps) {
  return (
    <motion.div
      className="bg-red-100 p-6 rounded-xl shadow-lg w-full max-w-sm"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 4 }}
    >
      <div className="flex items-center gap-3 mb-4 text-red-700 text-xl font-semibold">
        {icon}
        {title}
      </div>
      <motion.div
        className="text-4xl font-bold text-red-800"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {count}
      </motion.div>
      <ul className="mt-4 space-y-1 text-sm text-red-700">
        {alerts.map((alert, idx) => (
          <motion.li
            key={idx}
            className="bg-white px-3 py-1 rounded shadow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3 }}
          >
            {alert}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}