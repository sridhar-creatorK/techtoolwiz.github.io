import React from 'react';

interface ToolCardProps {
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-md text-left transition-transform duration-300 hover:-translate-y-2">
      <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
};

export default ToolCard;