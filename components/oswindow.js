import styles from './oswindow.module.css';

function OSWindow({
  children,
  ...rest
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttonRed}/>
        <div className={styles.buttonYellow}/>
        <div className={styles.buttonGreen}/>
      </div>
      <div {...rest} className={`${styles.content} ${rest.className}`}>
        {children}
      </div>
    </div>
  );
}

function Fake({
  children,
  ...rest
}) {
  return (
    <div {...rest} className={`${styles.fakeContainer} ${rest.className}`}>
      {children}
    </div>
  )
}

OSWindow.Fake = Fake;
export default OSWindow
