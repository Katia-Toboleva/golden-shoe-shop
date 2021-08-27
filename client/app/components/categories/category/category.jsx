import React from 'react';
import classnames from 'classnames/bind';
import styles from '../categories.scss';

const cx = classnames.bind(styles);

const getInlineStyles = (url) => ({
  backgroundImage: `url(${url})`,
});

const Category = ({
  index,
  category,
  url,
  onClick,
}) => (
  <>
    <div className={styles[`category__${index}`]} style={getInlineStyles(url)} />
  </>
);

export default Category;
