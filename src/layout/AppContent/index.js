import './index.css';

import Hero from 'sections/Hero';
import Features from 'sections/Features';
import Benefits from 'sections/Benefits';
import UseCases from 'sections/UseCases';
import Question from 'sections/Question';
import Achivements from 'sections/Achivements';
import Team from 'sections/Team';

const AppContent = () => {
  return (
    <div className="App-content ">
      <Hero />
      <Features />
      <Benefits />
      <UseCases />
      <Achivements />
      <Question />
      <Team />
    </div>
  );
};

export default AppContent;
