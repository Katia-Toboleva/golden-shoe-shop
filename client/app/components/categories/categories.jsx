import React from 'react';
import classnames from 'classnames/bind';
import styles from './categories.scss';

const cx = classnames.bind(styles);

const Categories = ({
  category,
  onClick,
}) => (
  <>
    <div className={styles['category']}>
      ABC
    </div>
  </>
);

export default Categories;