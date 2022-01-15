import Image from 'next/image';
import styles from './styles.module.scss';
import { cardProps } from '../../interfaces';

const Card: React.FC<cardProps> = (props) => {
  return (
    <>
      {!!props ? (
        <img className={styles.card} src={props.image} alt={props.title} />
      ) : null}
    </>
  );
};

export { Card };
