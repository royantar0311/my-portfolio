import React from 'react';
import './stylesheets/App.css';
import Header from './scripts/Header';
import Landing from './scripts/Landing';
import Footer from './scripts/Footer';
import Skills from './scripts/Skills';
import Projects from './scripts/Projects';
import About from './scripts/About';
import Resume from './scripts/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
