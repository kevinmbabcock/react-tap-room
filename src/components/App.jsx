import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import ViewKegList from './ViewKegList';
import Admin from './Admin';
import Error404 from './Error404';
import BackgroundImage from '../assets/images/background-image.jpg';

const borderBox = {
  border: '5px solid grey',
  borderColor: '#262626',
  backgroundColor: '#bfbfbf',
  marginTop: '0px',
  marginBottom: 'auto',
  padding: '10px',
  textAlign: 'center'
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList;
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
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
              <Route path='/view-kegs' render={(props)=><ViewKegList kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}/>} />
              <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} kegList={this.state.masterKegList} onAddingNewKegToList={this.handleAddingNewKegToList}/>} />
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
}

export default App;
