import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-text-gradient">
        Tech Tool Wiz
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-600">
        Your smart hub for everyday tech tools.
      </p>
    </header>
  );
};

export default Header;