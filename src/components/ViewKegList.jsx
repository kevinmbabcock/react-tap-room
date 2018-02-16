import React from 'react';
import KegList from './KegList';
import PropTypes from 'prop-types';

function ViewKegList(props){

  var localStyles = {
    margin: '0px',
    padding: '0px'
  };

  var titleStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    color: '#660000'
  };

  return (
    <div style={localStyles}>
      <p style={titleStyle}><strong>Beers on Tap:</strong></p>
      <KegList kegList={props.kegList}/>
    </div>
  );
}

ViewKegList.propTypes = {
  kegList: PropTypes.array
};

export default ViewKegList;
