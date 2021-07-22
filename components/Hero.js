import Image from 'next/image';
import heroBg from '../public/hero-bg.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={styles.HeroContainer} style={{ position: 'relative' }}>
        <Image
          src={heroBg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
          quality={100}
        />
        <div className={styles.Hero} style={{ position: 'relative' }}>
          <header className={styles.Header}>
            <h1>Mazeika LLC</h1>
          </header>
          <main>
            <div className={styles.LeftTitle}>
              <div>
                <h1>Build Your</h1>
                <h1 className={styles.Highlight}>Web Presence</h1>
              </div>
              <a className={styles.ScheduleBtn} href="https://calendly.com/mazeika-llc/new-client">
                Let's Meet
              </a>
            </div>
            <div className={styles.LeftSubtitle}>
              <h2>We are professional developers that implement custom solutions to modern problems.</h2>
            </div>
            <div className={styles.LeftTags}>
              <div className={styles.Tag}>
                websites
              </div>
              <div className={styles.Tag}>
                e-commerce
              </div>
              <div className={styles.Tag}>
                mobile
              </div>
              <div className={styles.Tag}>
                seo
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
