import React from 'react';
import Dropdown from '../dropdpwn/dropdown';
import Text from '../text';
import Button from '../button';
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

const sort = {
  label: 'sort',
  items: ['Newest', 'Price low-hight', 'Price hight-low', 'Best sellers'],
};

const Filters = ({
  onFilterClick,
  onApply,
  onReset,
  womanFilterSelected,
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
            {!filtersApplied && (
              <Button round={false} theme="black" onClick={onApply} padded>
                <Text text="apply" transform="uppercase" color="white" />
              </Button>
            )}
            {filtersApplied && (
              <Button onClick={onReset} padded border="grey">
                <Text text="X" color="grey" />
              </Button>
            )}
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
