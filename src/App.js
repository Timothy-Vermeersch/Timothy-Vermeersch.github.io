import React from 'react';
import './App.css';
import PageFrame from './PageFrame';
import Home from './Home';
import ProjectList from './Projects/ProjectList';
import GameContainer from './Games/GameContainer';
import GamesList from './Games/GamesList'
import About from './About/About'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectRouter from './Projects/ProjectRouter';

function App() {
  return (
    <Router>
      <PageFrame />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={ProjectList} />
        <Route exact path="/Projects/:projectId" component={ProjectRouter} />
        <Route exact path="/Games" component={GamesList} />
        <Route exact path="/Games/:gameId" component={GameContainer} />
        <Route exact path="/About" component={About} />
        <Route component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
