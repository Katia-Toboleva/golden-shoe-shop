import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';

import { motion, AnimatePresence } from 'framer-motion';

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

  const handleAction = (action, item) => {
    onAction(action, item);
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
            onClick={() => handleAction('close')}
          >
            {Panel
              ? (
                <Panel
                  item={panel.props}
                  onModalAction={handleAction}
                  onCloseModalAction={handleAction}
                />
              )
              : React.cloneElement(children, {
                onAction: handleAction,
              })}
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
  onAction: () => { },
};

export default Modal;
