import React, { useEffect, useState } from 'react'
import { Muted, Unmuted } from '../icons'
import styles from './styles.module.scss'

const RecommendationVideo = () => {
  const [muted, setMuted] = useState(true)

  return (
    <div className={styles.videoBox}>
      <div className={styles.button}>
        <button
          onClick={() => {
            setMuted(!muted)
          }}
        >
          {!!muted ? <Muted /> : <Unmuted />}
        </button>
      </div>
      <div className={styles.box}>
        <video
          width="100%"
          disablePictureInPicture
          disableRemotePlayback
          autoPlay
          muted={muted}
          poster="https://sm.ign.com/ign_br/screenshot/default/the-batman-2021-official-logo-featured-01_3z62.jpg"
        >
          <source src="/video.mp4" />
        </video>
      </div>
    </div>
  )
}

export { RecommendationVideo }
