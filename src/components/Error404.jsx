import React from 'react';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Please use the navigation bar on the right side of the page to exit</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
