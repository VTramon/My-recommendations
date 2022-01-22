import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const RecommendationVideo = () => {
  const [muted, setMuted] = useState(true)

  const handleMuted = () => {}

  return (
    <aside
      style={{
        position: 'absolute',
        top: '0',
        height: '100vh',
        width: '100vw',
        zIndex: '-1',
      }}
      className={styles.box}
    >
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

      <button
        onClick={() => {
          setMuted(!muted)
        }}
      >
        unmute
      </button>
    </aside>
  )
}

export { RecommendationVideo }
