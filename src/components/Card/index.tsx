import Image from 'next/image';
import styles from './styles.module.scss';
import { cardProps } from '../../interfaces';

const Card: React.FC<cardProps> = ({ item }) => {
  return (
    <>
      {!!item ? (
        <img className={styles.card} src={item.image} alt={item.title} />
      ) : null}
    </>
  );
};

export { Card };
