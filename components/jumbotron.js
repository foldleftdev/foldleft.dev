import Section from './section';
import styles from './jumbotron.module.css';

export default function Jumbotron() {
  return (
    <Section className={styles.container} wide>
      <Card title="Websites">
        Beautiful and modern websites for ecommerce, restaurants, studios, and more.
      </Card>
      <Card title="Consulting">
        Expert advice in building an online presence for small businesses.
      </Card>
    </Section>
  );
}

function Card({
  title,
  children,
}) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{children}</p>
    </div>
  );
}
