import React from 'react';
import Header from './components/Header';
import GetStartedButton from './components/GetStartedButton';
import ToolIcon from './components/ToolIcon';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';

import { CalculatorIcon } from './components/icons/CalculatorIcon';
import { ConverterIcon } from './components/icons/ConverterIcon';
import { NotesIcon } from './components/icons/NotesIcon';
import { ClockIcon } from './components/icons/ClockIcon';

interface HomePageProps {
  onNavigate: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const tools = [
    { name: 'Calculator', icon: <CalculatorIcon />, color: 'bg-blue-400' },
    { name: 'Converter', icon: <ConverterIcon />, color: 'bg-pink-400' },
    { name: 'Notes', icon: <NotesIcon />, color: 'bg-green-400' },
    { name: 'Clock', icon: <ClockIcon />, color: 'bg-orange-400' },
  ];

  return (
    <div className="bg-gradient-to-b from-[#AEE8FF] to-[#FFE1B2] min-h-screen text-gray-800 flex flex-col items-center justify-between font-sans overflow-x-hidden">
      <main className="flex flex-col items-center text-center px-4 pt-16 sm:pt-24 w-full">
        <Header />
        <div className="mt-12">
          <GetStartedButton onClick={onNavigate} />
        </div>
        <div className="mt-20 sm:mt-28 flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
          {tools.map((tool, index) => (
            <ToolIcon 
              key={tool.name} 
              icon={tool.icon} 
              color={tool.color} 
              name={tool.name} 
              animationDelay={`${index * 200}ms`} 
            />
          ))}
        </div>
        <section className="mt-24 sm:mt-32 w-full max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-700">Explore Our Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ToolCard 
              title="Calculator" 
              description="Quick arithmetic & conversions" 
            />
            <ToolCard 
              title="Clock" 
              description="Set alarms & timers easily" 
            />
          </div>
        </section>
      </main>
      <div className="w-full mt-24 sm:mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;