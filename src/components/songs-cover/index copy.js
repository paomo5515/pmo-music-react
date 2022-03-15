import React, { memo } from 'react'
// import styles from './index.module.scss'
import "./index.scss"
const PmoSongsCover = memo((props) => {
  const { info } = props
  return (
    <div className="songscover">
      <div className="covertop">
        <img className="picUrl" src={info.picUrl} alt={info.alg} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="erji sprite_icon"></i>
              {info.playCount}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="coverbottom text-nowrap">
        {info.name}
      </div>
      <div className="coversource">
        by
      </div>
    </div>
  )
})

export default PmoSongsCover;