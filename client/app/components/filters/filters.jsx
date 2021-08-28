import React from 'react';
import Dropdown from '../dropdpwn/dropdown';
import Text from '../text';
import SubMenu from '../subMenu/subMenu';
import { Row, Column } from '../grid';

import styles from './styles.scss';

const filtersArr = [
  {
    label: 'women',
    items: ['boots', 'heels', 'trainers', 'flats'],
  },
];

const Filters = ({onItemClick}) => {
  return (
    <div className={styles.filters}>
      <Text text="Filter by" weight="bold" size="semismall"/>
      <Row direction="row" alignItems="center" justifyContent="space-between">
        <Column>
          {filtersArr.map((f) => (
            <Dropdown label={f.label}>
              <SubMenu onItemClick={onItemClick} items={f.items}/>
            </Dropdown>
          ))}
        </Column>
      </Row>
    </div>
  );
};

export default Filters;
