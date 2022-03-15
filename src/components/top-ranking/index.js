import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '../../pages/player/store'
import { getSizeImage } from '../../utils/format-utils'
import styles from './index.module.scss'
const PmoTopRanking = memo((props) => {
  // rops and state
  const { info } = props
  const { tracks = [] } = info

  // redux-hooks
  const dispatch = useDispatch()

  // other-handle
  const playMusic = (item) => {
    // 当前用户点击歌曲的 id
    // console.log(item.id);
    dispatch(getSongDetailAction(item.id))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={getSizeImage(info.coverImgUrl)} alt={info.name} />
          <a href="/todo" className='image-cover'>ranking</a>
        </div>
        <div className={styles.info}>
          <a href="/todo">{info.name}</a>
          <div className=''>
            <div className={`${styles.btn} ${styles.play} sprite_02`}></div>
            <div className={`${styles.btn} ${styles.favor} sprite_02`}></div>
          </div>
        </div>
      </div>
      {/* 歌曲列表 */}
      <div className={styles.list}>
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="iten">
                <div className="rank">{index + 1}</div>

                <div className={styles.info}>
                  <span className={styles.name}>{item.name}</span>
                  <div className="operate">
                    <button
                      className={`${styles.btn} ${styles.play} sprite_02`}
                      onClick={e => playMusic(item)}></button>
                    <button className={`${styles.btn} ${styles.addto} sprite_icon2`}></button>
                    <button className={`${styles.btn} ${styles.favor} sprite_02`}></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.footer}>
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </div>

  )
})

export default PmoTopRanking;