import styles from './textInput.module.css';
import { useEffect, useState } from 'react';

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.name
 * @param {boolean} [props.large=false]
 */
export default function TextInput({
  label,
  name,
  large = false,
  ...rest
}) {
  const storageKey = `TextInput_${name}`;
  const [value, setValue] = useState('');

  useEffect(() => {
    const value = window.localStorage.getItem(storageKey);
    if (value) {
      setValue(value);
    }
  }, []);

  function onChange(e) {
    const { value } = e.target;
    window.localStorage.setItem(storageKey, value);
    setValue(value || '');
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {large ? (
        <textarea
          {...rest}
          className={styles.input}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          {...rest}
          className={styles.input}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
