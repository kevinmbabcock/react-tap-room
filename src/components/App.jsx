import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import ViewKegList from './ViewKegList';
import Admin from './Admin';
import EditKeg from './EditKeg';
import Error404 from './Error404';
import BackgroundImage from '../assets/images/background-image.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList = []
    }
  }

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
            <Route exact path='/' render={()=><About />} />
            <Route path='/view-kegs' render={()=><ViewKegsList kegList={masterKegList} />
            <Route path='/admin' render={()=><Admin kegList={masterKegList} />
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
