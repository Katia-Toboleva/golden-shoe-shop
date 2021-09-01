import React from 'react';
import {
  Row, Column, Icon, Button, Text,
} from '@components';

import Dropdown from '../dropdown/dropdown';

import styles from './styles.scss';

const type = {
  label: 'type',
  items: ['heels', 'trainers', 'flats', 'loafers'],
};

const size = {
  label: 'size',
  items: [6, 6.5, 7, 7.5, 8, 8.5],
};

const color = {
  label: 'colour',
  items: ['black', 'blue', 'brown', 'red', 'yellow', 'pink', 'purple'],
};

const sort = {
  label: 'sort',
  items: ['All', 'Price low-high', 'Price high-low', 'In stock'],
};

const Filters = ({
  onFilterClick,
  onApply,
  onReset,
  typeFilterSelected,
  sizeFilterSelected,
  colorFilterSelected,
  sortFilterSelected,
}) => (
  <div className={styles.filters}>
    <Row direction="row" justifyContent="space-between" alignItems="center">
      <Column>
        <Text text="Filter by" weight="bold" size="small" />
        <div className={styles['box--left']}>
          <Row direction="row" alignItems="center" space="small">
            <Column>
              <Dropdown
                label={type.label}
                onFilterClick={onFilterClick}
                items={type.items}
                filterSelected={typeFilterSelected}
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

            <Button round theme="black" onClick={onApply} >
              <Icon icon="next" size="medium" round />
            </Button>

            <Button onClick={onReset}>
              <Icon icon="close" theme="black" size="medium" round />
            </Button>
          </Row>
        </div>
      </Column>
      <Column>
        <Text text="Sort by" weight="bold" size="small" />
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
