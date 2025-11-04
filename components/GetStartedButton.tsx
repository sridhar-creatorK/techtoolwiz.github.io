import React from 'react';

interface GetStartedButtonProps {
  onClick: () => void;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-10 py-5 bg-white rounded-full text-xl font-semibold text-gray-800 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/50 focus:outline-none focus:ring-4 focus:ring-white/50"
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;