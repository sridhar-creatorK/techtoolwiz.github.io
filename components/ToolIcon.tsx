import React from 'react';

interface ToolIconProps {
  icon: React.ReactNode;
  color: string;
  name: string;
  animationDelay: string;
}

const ToolIcon: React.FC<ToolIconProps> = ({ icon, color, name, animationDelay }) => {
  return (
    <div className="flex flex-col items-center gap-3 animate-float" style={{ animationDelay }}>
      <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-lg ${color}`}>
        <div className="w-12 h-12 sm:w-14 sm:h-14 text-white">
          {icon}
        </div>
      </div>
      <span className="font-semibold text-slate-700">{name}</span>
    </div>
  );
};

export default ToolIcon;