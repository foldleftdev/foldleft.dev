import styles from './submit.module.css';
import Loading from './loading';
import Spacer from './spacer';

/**
 * @param {object} props
 * @param {boolean} [props.inProgress=false]
 */
export default function Submit({
  inProgress = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={styles.submit}
      type="submit"
      disabled={inProgress}
    >
      {inProgress ? (
        <>Submitting <Spacer value={<Loading/>}/></>
      ) : 'Submit'}
    </button>
  );
}
