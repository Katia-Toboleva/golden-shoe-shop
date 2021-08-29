import React from 'react';
import Dropdown from '../dropdpwn/dropdown';
import Text from '../text';
import { Row, Column } from '../grid';

import styles from './styles.scss';

const woman = {
  label: 'women',
  items: ['boots', 'heels', 'trainers', 'flats'],
};

const size = {
  label: 'size',
  items: [6, 6.5, 7, 7.5, 8, 8.5],
};

const color = {
  label: 'colour',
  items: ['black', 'blue', 'brown', 'red', 'yellow', 'pink', 'purple'],
};

const price = {
  label: 'price',
  items: [10, 20, 25, 30, 35, 40],
};

const sort = {
  label: 'sort',
  items: ['Newest', 'Price low-hight', 'Price hight-low', 'Best sellers'],
};

const Filters = ({
  onFilterClick,
  womanFilterSelected,
  sizeFilterSelected,
  colorFilterSelected,
  priceFilterSelected,
  sortFilterSelected,
}) => (
  <div className={styles.filters}>
    <Row direction="row" justifyContent="space-between">
      <Column>
        <Text text="Filter by" weight="bold" size="semismall" />
        <div className={styles['box--left']}>
          <Row direction="row" alignItems="center" justifyContent="space-between">
            <Column>
              <Dropdown
                label={woman.label}
                onFilterClick={onFilterClick}
                items={woman.items}
                filterSelected={womanFilterSelected}
              />
            </Column>
            <Column>
              <Dropdown
                label={size.label}
                onFilterClick={onFilterClick}
                items={size.items}
                filterSelected={sizeFilterSelected}
              />
            </Column>
            <Column>
              <Dropdown
                label={color.label}
                onFilterClick={onFilterClick}
                items={color.items}
                filterSelected={colorFilterSelected}
              />
            </Column>
            <Column>
              <Dropdown
                label={price.label}
                onFilterClick={onFilterClick}
                items={price.items}
                filterSelected={priceFilterSelected}
              />
            </Column>
          </Row>
        </div>
      </Column>
      <Column>
        <Text text="Sort" weight="bold" size="semismall" />
        <div className={styles.box}>
          <Dropdown
            label={sort.label}
            onFilterClick={onFilterClick}
            items={sort.items}
            filterSelected={sortFilterSelected}
          />
        </div>
      </Column>
    </Row>
  </div>
);

export default Filters;
