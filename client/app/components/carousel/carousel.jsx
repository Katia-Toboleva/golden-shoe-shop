import React, {useState} from 'react';
import Icon from '../icon';
import Button from '../button';
import Image from '../image';
import styles from './styles.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const handleRightClick = () => {
    if (index !== images[0].urls.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleFooterImageClick = (ind) => {
    setIndex(ind);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Button onClick={handleLeftClick}>
          <Icon icon="chevron" theme="grey" rotate="left" size="large" />
        </Button>
        <div className={styles.main}>
          <Image src={images[0].urls[index]} />
        </div>
        <Button onClick={handleRightClick}>
          <Icon icon="chevron" theme="grey" rotate="right" size="large" />
        </Button>
      </div>
      <div className={styles.footer}>
        {images[0].urls.map((i, ind) => (
          <div
            onClick={() => handleFooterImageClick(ind)}
            className={cx('image', {
            'active': index === ind,
          })}>
            <Image src={i}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
