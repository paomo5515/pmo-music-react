import React, { memo } from 'react'
import styles from './index.module.scss'
import { getCount } from '../../utils/format-utils'
import { getSizeImage } from '../../utils/format-utils'
const PmoSongsCover = memo((props) => {
  const { info } = props
  return (
    <div className={styles.songscover}>
      <div className={styles.covertop}>
        <img className={styles.picUrl} src={getSizeImage(info.picUrl)} alt={info.alg} />
        <div className={styles.cover + ' sprite_cover'} >
          <div className={styles.info + '  sprite_cover'}>
            <span>
              <i className={styles.erji + ' sprite_icon'}></i>
              {getCount(info.playCount)}
            </span>
            <i className={styles.play + " sprite_icon"}></i>
          </div>
        </div>
      </div>
      <div className={styles.coverbottom + " text-nowrap"}>
        {info.name}
      </div>
      <div className={styles.coversource}>
        by {info.copywriter}
        {/* {info.copywriter || info.creator.nickname} */}

      </div>
    </div>
  )
})

export default PmoSongsCover;