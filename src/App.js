import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/sideNav'
import Home from './components/home'
import About from './components/about'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
