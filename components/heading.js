import Spacer from './spacer';
import styles from './heading.module.css';

/**
 * @param {object} props
 * @param {string} props.text
 * @param {string} props.suffix
 */
export default function Heading({
  text,
  suffix,
}) {
  if (!suffix) {
    return (
      <h1 className={styles.text}>
        {text}
      </h1>
    );
  }
  const lastWordIdx = text.lastIndexOf(' ') + 1;
  const firstWords = text.slice(0, lastWordIdx);
  const lastWord = text.slice(lastWordIdx);
  return (
    <h1>
      <span className={styles.text}>
        {firstWords}
      </span>
      <span className="no-wrap">
        <span className={styles.text}>
          {lastWord}
        </span>
        <Spacer>
          {suffix}
        </Spacer>
      </span>
    </h1>
  );
}
