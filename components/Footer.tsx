import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/30 backdrop-blur-sm py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Tech Tool Wiz. All rights reserved.</p>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">About</a>
          <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">Contact</a>
          <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;