import React from 'react';

interface DeviceCardProps {
  name: string;
  icon: React.ReactNode;
  gradientClass: string;
  shadowColorClass: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ name, icon, gradientClass, shadowColorClass }) => {
  return (
    <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl shadow-lg p-8 w-60 h-60 text-white flex flex-col items-center justify-center gap-4 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${shadowColorClass}`}>
      <div className="w-20 h-20">
        {icon}
      </div>
      <span className="text-2xl font-semibold">{name}</span>
    </div>
  );
};

export default DeviceCard;