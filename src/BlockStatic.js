import React from 'react';
import PropTypes from 'prop-types';
import Tiler from 'react-image-tiler'


const BlockStatic = ({
  resource
}, {
  datasets = {}
}) => {
  const images = resource.data 
                  && resource.data.images
                  && resource.data.images.map(image => datasets[image.imageDataset] && datasets[image.imageDataset].uri );

  return (
    <figure 
      className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-image"
    >
      <Tiler images={images} minWidth="200" />
    </figure>
  );
}

BlockStatic.contextTypes = {
  datasets: PropTypes.object,
}

export default BlockStatic;