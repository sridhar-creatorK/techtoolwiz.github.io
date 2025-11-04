import React, { useState } from 'react';
import HomePage from './HomePage';
import DeviceSelectionPage from './DeviceSelectionPage';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage('select-device');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'select-device' && <DeviceSelectionPage />}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default App;