import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import ViewKegs from './ViewKegs';
import EditKegList from './EditKegList';
import Error404 from './Error404';

function App(){

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/view-kegs' component={ViewKegs} />
        <Route path='/edit-kegs' component={EditKegList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
