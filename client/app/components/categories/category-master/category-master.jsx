import React from 'react';
import classnames from 'classnames/bind';
import styles from '../categories.scss';

const cx = classnames.bind(styles);

const getInlineStyles = (url) => ({
  background: `url(${url}) center/cover no-repeat`,
  height: '400px',
});

const CategoryMaster = ({
  index,
  category,
  url,
  onClick,
}) => (
  <>
    <div className={styles[`category category__${index}`]} style={getInlineStyles(url)} />
  </>
);

export default CategoryMaster;
