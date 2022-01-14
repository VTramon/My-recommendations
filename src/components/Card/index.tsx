import Image from 'next/image';
import styles from './styles.module.scss';
import { CardProps, imageProps } from '../../interfaces';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Card: React.FC<CardProps> = ({ id }) => {
  const [imgData, setImgData] = useState<imageProps>();

  const handleImage = async () => {
    const response = await axios.get(
      `https://imdb-api.com/pt/API/Title/${process.env.NEXT_PUBLIC_KEY}/${id}/Full`
    );

    const data = response.data;

    setImgData(data);
  };

  useEffect(() => {
    // handleImage();
  }, []);

  return (
    <div className={styles.card} id={id}>
      {!!imgData ? (
        <img className={styles.card} src={imgData.image} alt={imgData.title} />
      ) : null}
    </div>
  );
};

export { Card };
