import React, { useState} from 'react';
import { Icon, Text, Row, Column } from '@components';
import classnames from 'classnames/bind';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const options = [
  {
    label: 'FREE standard delivery (5 days)',
    cost: 0,
  },
  {
    label: 'Collect from store (3 days)',
    cost: 5.95,
  },
  {
    label: 'Express delivery (24 hrs)',
    cost: 9.95,
  },
];

const DeliveryOptions = ({ onOption, optionSelected }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropDown}>
      <div className={styles.button} onClick={() => setOpen(!open)}>
        <Text text="Delivery options" />
        <Icon icon="chevron" theme="black" />
      </div>
      {open && (
        <div className={styles.menu}>
          {options.map((item) => (
            <div className={styles.option} onClick={() => onOption(Number(item.cost))}>
              <div className={cx('checkBox', {
                'active' : optionSelected === item.cost,
              })}>
                {item.cost === optionSelected && (
                  <Icon icon="checkMark" theme="white" />
                )}
              </div>
              <Row space="small">
                <Column grow>
                  <div className={styles.info}>
                    <Text text={item.label} />
                  </div>
                </Column>
                <Column shrink>
                  <Text text={`£ ${item.cost}`} />
                </Column>
              </Row>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeliveryOptions;
