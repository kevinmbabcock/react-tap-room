import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import ViewKegList from './ViewKegList';
import EditKegList from './EditKegList';
import EditKeg from './EditKeg';
import Error404 from './Error404';

function App(){

  return (
    <div className="container">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/view-kegs' component={ViewKegList} />
        <Route path='/edit-kegs' component={EditKegList} />
        <Route path='/edit-keg/keg' component={EditKeg} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
