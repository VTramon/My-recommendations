import React, { useEffect, useState } from 'react';
import { boxProps, cardProps, myRecommendationList } from '../../interfaces';
import { Card } from '../Card';
import styles from './styles.module.scss';

const RecommendationsBox: React.FC<boxProps> = ({ items }) => {
  // const [data, setData] = useState<myRecommendationList[]>();

  // useEffect(() => {
  //   () => setData(items);
  // }, []);

  return (
    <div className={styles.box}>
      {items
        ? items.map((item, index) => {
            return <Card key={index} item={item} />;
          })
        : null}
    </div>
  );
};

export { RecommendationsBox };
