import React from 'react';
import { Spinner } from '@components';

import styles from './panel-loading.scss';

const PanelLoading = () => (
  <div className={styles['panel-loading']}>
    <Spinner />
  </div>
);

export default PanelLoading;
