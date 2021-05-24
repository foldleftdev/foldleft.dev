import styles from './oswindow.module.css';

export default function OSWindow({
  children,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttonRed}/>
        <div className={styles.buttonYellow}/>
        <div className={styles.buttonGreen}/>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
