import { LayoutProps } from '../../interfaces';
import { Header } from '../Header';
import styles from './styles.module.scss';

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <main className={styles.layout}>
      <Header />
      {props.children}
    </main>
  );
};

export { Layout };
