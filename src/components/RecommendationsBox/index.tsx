import React, { useEffect, useState } from 'react'
import { boxProps, cardProps, myRecommendationList } from '../../interfaces'
import { Card } from '../Card'
import styles from './styles.module.scss'

const RecommendationsBox: React.FC<boxProps> = ({ items, name }) => {
  return (
    <div className={styles.outerContentBox}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.contentBox}>
        {items
          ? items.map((item, index) => {
              return <Card key={index} item={item} />
            })
          : null}
      </div>
    </div>
  )
}

export { RecommendationsBox }
