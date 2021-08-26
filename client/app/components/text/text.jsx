import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = ({
  translation,
  color,
  size,
  weight,
  children,
  transform,
  decoration,
  display,
}) => {
  const { t } = useTranslation();
  const text = translation && t(translation);

  const extraProps = (text)
    ? { dangerouslySetInnerHTML: { __html: text } }
    : { children };

  return (
    <span
      className={cx('text', {
        [`text--color-${color}`]: color,
        [`text--size-${size}`]: size,
        [`text--weight-${weight}`]: weight,
        [`text--transform-${transform}`]: transform,
        [`text--decoration-${decoration}`]: decoration,
        [`text--display-${display}`]: display,
      })}
      {...extraProps}
    />
  );
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
};

export default Text;
