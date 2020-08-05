import React from 'react';
import './stylesheets/App.css';
import Header from './scripts/Header';
import Landing from './scripts/Landing';
import Footer from './scripts/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/about'></Route>
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
