import React from 'react';
import DeviceCard from './components/DeviceCard';
import { ComputerIcon } from './components/icons/ComputerIcon';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { TabletIcon } from './components/icons/TabletIcon';

const DeviceSelectionPage: React.FC = () => {
  const devices = [
    { name: 'Computer', icon: <ComputerIcon />, gradient: 'from-cyan-400 to-blue-500', shadow: 'hover:shadow-blue-400/50' },
    { name: 'Tablet', icon: <TabletIcon />, gradient: 'from-green-400 to-teal-500', shadow: 'hover:shadow-green-400/50' },
    { name: 'Phone', icon: <PhoneIcon />, gradient: 'from-purple-400 to-pink-500', shadow: 'hover:shadow-pink-500/50' },
  ];

  return (
    <div className="bg-gradient-to-br from-[#AEE8FF] to-[#a3b4f5] min-h-screen text-gray-800 flex flex-col items-center justify-center font-sans p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-12">Select Your Device to Continue</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {devices.map((device) => (
            <DeviceCard 
              key={device.name}
              name={device.name}
              icon={device.icon}
              gradientClass={device.gradient}
              shadowColorClass={device.shadow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceSelectionPage;