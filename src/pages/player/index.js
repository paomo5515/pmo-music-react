// 点击头像弹出页面
import React, { memo } from 'react'

import styles from "./index.module.scss"
const PmoPlayer = memo(() => {
  return (
    <div className={styles.playerWrapper}>
      {/* 内容区 */}
      <div className={`${styles.content} wrap-v2`}>
        <div className={styles.playerLeft}>
          <h2 className={styles.playerInfo}>playerInfo</h2>
          <h2 className={styles.songContent}>songContent</h2>
        </div>
        {/* 右侧歌单 */}
        <div className={styles.playerRight}>
          <h2>PmoSimiPlayList</h2>
          <h2>PmoSimiSong</h2>
          <h2>Download</h2>
        </div>
      </div>
    </div>
  )
})

export default PmoPlayer;