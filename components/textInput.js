import styles from './textInput.module.css';

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
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {large ? (
        <textarea {...rest} className={styles.input} id={name} name={name}/>
      ) : (
        <input {...rest} className={styles.input} id={name} name={name}/>
      )}
    </div>
  );
}
