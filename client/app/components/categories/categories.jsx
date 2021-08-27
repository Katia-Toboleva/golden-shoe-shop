import React from 'react';
import classnames from 'classnames/bind';
import styles from './categories.scss';

const cx = classnames.bind(styles);

const Categories = ({
  categories,
  onClick,
}) => (
  <>
    <div className={styles['categories']}>
      ABC
    </div>
  </>
);

export default Categories;
