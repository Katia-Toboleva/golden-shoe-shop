import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../grid';
import styles from './image-gallery.scss';

const getInlineStyles = (item) => ({
  backgroundImage: `url(${item.url})`,
});

const ImageGallery = ({ images }) => (
  <div className={styles['image-gallery']}>
    <Row wrap spacing="small">
      {images.map((item) => (
        <Column key={item.id} size="4">
          <div className={styles['image-gallery__image']} style={getInlineStyles(item)} />
        </Column>
      ))}
    </Row>
  </div>
);

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
