import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from '@components';

import styles from './modal.scss';

import panels from './panels';

const cx = classnames.bind(styles);

const Modal = ({
  panel,
  visible,
  theme,
  size,
  children,
  onAction,
}) => {
  const [state, setState] = useState({ isVisible: visible });
  const Panel = panels[panel.type];

  useEffect(() => {
    setState({ isVisible: visible });
  }, [visible]);

  const handleAction = (action) => {
    onAction(action);
  };

  const { isVisible } = state;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={cx('modal', {
              [`modal--theme-${theme}`]: theme,
              [`modal--size-${size}`]: size,
            })}
          >
            {Panel
              ? <Panel {...panel.props} onAction={handleAction} />
              : React.cloneElement(children, {
                onAction: handleAction,
              })}

            <Button onClick={() => handleAction('close')}>
              <Icon icon="close" theme="grey" size="medium" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.defaultProps = {
  size: 'full-page',
  theme: 'panel-loading',
  panel: {
    type: '',
    props: {},
  },
  onAction: () => {},
};

export default Modal;
