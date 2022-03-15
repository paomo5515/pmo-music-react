import React, { memo } from 'react'
import { getSizeImage } from '../../utils/format-utils';
import styles from "./index.module.scss"
const PmoAlbumCover = memo((props) => {
  const { info, size = "130px", width = "153px", bgo = "-845px" } = props
  return (
    /* 单张卡片 */
    <div className={styles.albumcover}
      style={{ width: width }} >
      <div className={styles.albumImage}
        style={{ width: width, height: size }}>
        <img
          style={{ width: size, height: size }}
          src={getSizeImage(info.picUrl, size)}
          alt={info.name} />
        <a
          style={{ backgroundPosition: `0 ${bgo}` }}
          href="/todo" className={styles.cover + " image_cover"}>
          {info.name}</a>
      </div>
      <div
        style={{ width: size, color: "red" }}
        className={styles.albumInfo}>
        <div className={styles.name}>{info.name}</div>
        <div className={styles.name}>{info.artist.name}</div>
      </div>
    </div>
  )
})

export default PmoAlbumCover;