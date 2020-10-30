import React from 'react';
import axios from 'axios';
import API from './api';
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
  const user = {
    name: "Timothy"
  };

  /*API.post(`/api/create/message-board-post`, { boardName: "MainBoard", text: "First message sent through axios", user: "Timothy" })
    .then(res => {
      console.log(res);
      console.log(res.name);
    })
    */
  API.get('/api/read/message-board-posts/MainBoard', {boardName: "MainBoard"}).then(res => {
    console.log(res.data);
  })
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
