import Link from 'next/link';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>My Recommendations</h1>
      <div>
        <Link href={'#_blank'}>
          <a>Movies</a>
        </Link>
        <Link href={'#_blank'}>
          <a>Series</a>
        </Link>
      </div>
    </div>
  );
};

export { Header };
