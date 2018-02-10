import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import ViewKegList from './ViewKegList';
import EditKegList from './EditKegList';
import EditKeg from './EditKeg';
import Error404 from './Error404';
import BackgroundImage from '../assets/images/background-image.jpg';

function App(){

  var borderBox = {
    border: '5px solid grey',
    borderColor: '#262626',
    backgroundColor: '#bfbfbf',
    marginTop: '0px',
    marginBottom: 'auto',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div className="container">
      <style jsx global>{`
        body {
          background-image: url(${BackgroundImage});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
      <Header />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-9" style={borderBox}>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/view-kegs' component={ViewKegList} />
            <Route path='/edit-kegs' component={EditKegList} />
            <Route path='/edit-keg/keg' component={EditKeg} />
            <Route component={Error404} />
          </Switch>
        </div>
        <div className="col-sm-1">
        </div>
        <div className="col-sm-2" style={borderBox}>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
