import Image from 'next/image'
import styles from './styles.module.scss'
import { cardProps } from '../../interfaces'

const Card: React.FC<cardProps> = ({ item }) => {
  return (
    <>
      {!!item ? (
        <div className={styles.card}>
          <img className={styles.image} src={item.image} alt={item.title} />
        </div>
      ) : null}
    </>
  )
}

export { Card }
