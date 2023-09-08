import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection'; // Import the HeroSection component
import IntroSection from './components/IntroSection';

function App() {
  return (
    <div className="App">
      {/* Include the HeroSection component */}
      <HeroSection />
      <IntroSection/>
      {/* Include other sections or components */}
    </div>
  );
}

export default App;
