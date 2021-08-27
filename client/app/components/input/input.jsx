import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Text from '../text';
import styles from './input.scss';

const cx = classnames.bind(styles);

const Input = ({ value, placeholder, onChange, name }) => {
  const [state, setState] = useState({ focused: true, value });
  const { t } = useTranslation();

  const handleChange = (event) => {
    const newValue = event.currentTarget.value;

    setState({
      ...state,
      value: newValue,
    });

    onChange(newValue, name);
  };

  const handleInputFocus = () => {
    setState({
      ...state,
      focused: true,
    });
  };

  const handleInputBlur = () => {
    setState({
      ...state,
      // focused: false,
    });
  };

  return (
    <div className={cx('input', {
      'input--focused': (state.focused || state.value),
    })}
    >
      <span className={styles['input__header']}>
        <Text translation={placeholder} transform="capitalize" />
      </span>

      <input
        className={styles['input__body']}
        name={name}
        value={state.value}
        placeholder={t(placeholder)}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <span className={styles['input__underline']} />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: 'inputs.placeholder.title',
};

Input.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Input;
