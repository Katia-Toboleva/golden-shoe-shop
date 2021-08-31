import React from 'react';
import classnames from 'classnames/bind';
import {
  Category, CategoryMaster, Row, Column,
} from '@components';
import styles from './categories.scss';

const cx = classnames.bind(styles);

const Categories = ({
  categories,
  onClick,
}) => {
  const masterCat = categories.find(c => c.category === 'master');
  const otherCat = categories.filter(c => c.category !== 'master');

  return (
    <div className={styles['categories']}>
      <div className={styles['categories__item__0']}>
        <CategoryMaster
          index={0}
          category={masterCat.category}
          url={masterCat.url}
          onClick={onClick}
        />
      </div>
      {otherCat.map((category, index) => (
        <div className={styles[`categories__item__${index + 1}`]}>
          <Category
            index={index + 1}
            category={category.category}
            url={category.url}
            onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
