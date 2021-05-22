import Loading from './loading';
import Spacer from './spacer';
import styles from './submit.module.css';

/**
 * @param {object} props
 * @param {boolean} [props.loading=false]
 */
export default function Submit({
  loading = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={styles.submit}
      type="submit"
      disabled={loading}
    >
      {!loading ? 'Submit' : (
        <>
          Submitting
          <Spacer>
            <Loading/>
          </Spacer>
        </>
      )}
    </button>
  );
}
