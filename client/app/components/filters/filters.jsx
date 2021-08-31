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
  items: ['Newest', 'Price low-hight', 'Price hight-low', 'Best sellers'],
};

const Filters = ({
  onFilterClick,
  onApply,
  onReset,
  typeFilterSelected,
  sizeFilterSelected,
  colorFilterSelected,
  sortFilterSelected,
  filtersApplied,
}) => (
  <div className={styles.filters}>
    <Row direction="row" justifyContent="space-between">
      <Column>
        <Text text="Filter by" weight="bold" size="semismall" />
        <div className={styles['box--left']}>
          <Row direction="row" alignItems="center" justifyContent="space-between">
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

            <Button round={false} theme="black" onClick={onApply} padded>
              <Text text="apply" transform="uppercase" color="white" />
            </Button>

            {/* {filtersApplied && ( */}
              <Button onClick={onReset}>
                {/* <Text text="X" color="grey" /> */}
                <Icon icon="close" theme="black" size="medium" round />
              </Button>
            {/* )} */}
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
