import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppHeader from 'layout/AppHeader';
import AppContent from 'layout/AppContent';
import AppFooter from 'layout/AppFooter';
import TopBtn from 'components/TopBtn';

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
      <TopBtn />
    </div>
  );
}

export default App;
