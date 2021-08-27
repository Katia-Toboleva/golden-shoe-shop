import React from 'react';
import classnames from 'classnames/bind';
import { Category } from '@components';
import styles from './categories.scss';

const cx = classnames.bind(styles);

const Categories = ({
  categories,
  onClick,
}) => (
  <>
    <div className={styles['categories']}>
      {categories.map(category => (
        <Category
          category={category.type}
          url={category.url}
          onClick={onClick}
        />
      ))}
    </div>
  </>
);

export default Categories;
