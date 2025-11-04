import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-24 h-24 border-8 border-gray-200/50 border-solid rounded-full animate-spin-colors"></div>
    </div>
  );
};

export default LoadingSpinner;
