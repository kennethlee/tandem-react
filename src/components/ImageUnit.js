import React from 'react';

const ImageUnit = ({ imageData }) => {
  return (<div className="col-xs-12 gallery-img" key={imageData.id}>
    <img src={imageData.grid_url} className="center-block img-responsive" />
  </div>);
};

ImageUnit.propTypes = {
  imageData: React.PropTypes.object,
};

export default ImageUnit;
