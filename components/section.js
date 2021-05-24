import React from 'react';
import styles from './section.module.css';

/**
 * @param {object} props
 * @param {string} [props.as='div']
 * @param {boolean} [props.narrow=false]
 * @param {boolean} [props.wide=false]
 * @param {React.ReactNode} props.children
 */
export default function Section({
  as = 'div',
  narrow = false,
  wide = false,
  children,
  ...rest
}) {
  const widthClassName = narrow ? styles.narrow : wide ? '' : styles.medium;
  return React.createElement(as, {
    ...rest,
    className: `${styles.container} ${widthClassName} ${rest.className ?? ''}`,
  }, children);
}
