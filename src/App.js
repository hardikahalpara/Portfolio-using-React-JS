import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/sideNav'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/skills" component={Skills} exact />
            <Route path="/project" component={Project} exact />
            <Route path="/contact" component={Contact} exact />

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
