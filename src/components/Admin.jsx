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
          <p style={titleStyle}>Edit Keg:</p>
          <KegList kegList={props.kegList}/>
        </div>
        <div className="col">
          <AddKeg />
        </div>
      </div>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array
}

export default Admin;
