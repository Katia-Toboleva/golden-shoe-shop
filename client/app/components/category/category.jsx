import React from 'react';
import classnames from 'classnames/bind';
import styles from './category.scss';

const cx = classnames.bind(styles);

const getInlineStyles = (url) => ({
  backgroundImage: `url(${url})`,
});

const Category = ({
  category,
  url,
  onClick,
}) => (
  <>
    <div className={styles['category']}>
      <div className={styles['category__image']} style={getInlineStyles(url)} />
    </div>
  </>
);

export default Category;
