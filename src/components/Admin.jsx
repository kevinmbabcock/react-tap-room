import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';
import PropTypes from 'prop-types';

function Admin(props){

  var titleStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    color: '#660000'
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <p style={titleStyle}>Edit Kegs:</p>
          <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} currentKeg={props.currentKeg}/>
        </div>
        <div className="col">
          <AddKeg onAddingNewKegToList={props.onAddingNewKegToList}/>
        </div>
      </div>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  onAddingNewKegToList: PropTypes.func,
  currentRouterPath: PropTypes.string,
  onChangingSelectedKeg: PropTypes.func,
  currentKeg: PropTypes.object
};

export default Admin;
