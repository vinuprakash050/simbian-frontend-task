'use client';

import AlertCard from './AlertCard';
import { useEffect, useState } from 'react';
import { ShieldOff, AlertTriangle, Activity } from 'lucide-react';

export default function WithoutSimbian() {
  const [alerts, setAlerts] = useState<string[]>([]);

  const alertSamples = ["Phishing Email", "Suspicious Login", "Malware Detected", "Unusual Access"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(prev => [alertSamples[Math.floor(Math.random() * alertSamples.length)], ...prev].slice(0, 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Without Simbian</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <AlertCard title="Ignored Alerts" count={200} icon={<ShieldOff />} alerts={alerts} />
        <AlertCard title="Wrongly Closed Alerts" count={35} icon={<AlertTriangle />} alerts={alerts} />
        <AlertCard title="Active Threats" count={5} icon={<Activity />} alerts={alerts} />
      </div>
    </div>
  );
}