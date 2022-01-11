import Link from 'next/link';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <h1>My Recommendations</h1>
      </Link>
      <div>
        <Link href={'/movies'}>
          <a>Movies</a>
        </Link>
        <Link href={'/series'}>
          <a>Series</a>
        </Link>
      </div>
    </div>
  );
};

export { Header };
