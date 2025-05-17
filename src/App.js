// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import First from './components/Home/First';
import About_Our_ACM from './components/Home/About_Our_ACM';
import Announcement from './components/Home/Announcement/Announcement';
import Team from './components/Home/Team/Team';
import Footer from './components/Footer/Footer';
import Developer from './components/Developer/Developer';
import Blog from './components/Blog/Blog';
import Events from "./components/Events/Events";
import Our_Team from "./components/Our_Team/Our_Team";
import Gallery from "./components/Gallery/Gallery";
import Benefits from "./components/Benefits/Benefits";
import LogoDesigning from './components/Announcement/LogoDesigning';
import LogicMaster from './components/Announcement/LogicMaster.js';
import TechTalk from './components/Announcement/TechTalk.js';
import ModelExpo from './components/Announcement/ModelExpo.js';
import InnovationFest from './components/Announcement/InnovationFest.js';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <First />
              <About_Our_ACM />
              <Announcement />
              <Team />
            </>
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Announcement />} />
          <Route path="/our_team" element={<Our_Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Benefits" element={<Benefits />} />
          <Route path="/logo-designing" element={<LogoDesigning />} />
          <Route path="/logic-master" element={<LogicMaster/>} />
          <Route path="/tech-talk" element={<TechTalk/>} />
          <Route path="/model-expo" element={<ModelExpo/>} />
          <Route path="/innovation-fest" element={<InnovationFest/>} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
