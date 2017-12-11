import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import Tiler from 'react-image-tiler'

class BlockDynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightBoxOpen : false
    }
  }

  nextImage = () => {
    const {currentImage} = this.state;
    const newImage = currentImage + 1 > this.props.resource.data.images.length - 1 ? 0 : currentImage + 1;
    this.setState({
      currentImage: newImage
    });
  }

  previousImage = () => {
    const {currentImage} = this.state;
    const newImage = currentImage - 1 < 0 ? this.props.resource.data.images.length - 1 : currentImage - 1;
    this.setState({
      currentImage: newImage
    });
  }

  onOpenLightBox = () => {
    this.setState({
      currentImage: 0,
      lightBoxOpen: true
    })
  }

  onCloseLightBox = () => {
    this.setState({
      lightBoxOpen: false
    })
  }

  render() {
    const {
      props: {
        resource
      }, 
      state: {
        currentImage = 0,
        lightBoxOpen
      },
      context: {
        datasets = {}
      },
      nextImage,
      previousImage,
      onOpenLightBox,
      onCloseLightBox
    } = this;

    const images = resource.data 
                  && resource.data.images
                  && resource.data.images.map(image => ({
                    src: datasets[image.imageDataset] && datasets[image.imageDataset].uri
                  }));

    return (
      <figure
        className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-image"
        onClick={onOpenLightBox} 
      >
        <Tiler images={images.map(image => image.src)} minWidth="200" />

        {/*
          images.map((image, index) => {
            const onClick = () => {
              onOpenLightBox(index);
            }
            return (
              <img key={index} src={image.src} onClick={onClick} />
            )
          })
        */}
      <Lightbox
        images={images}
        isOpen={lightBoxOpen}
        currentImage={currentImage}
        onClickPrev={previousImage}
        onClickNext={nextImage}
        onClose={onCloseLightBox}
      />
      </figure>
    );

  }
}

BlockDynamic.contextTypes = {
  datasets: PropTypes.object,
}

export default BlockDynamic;