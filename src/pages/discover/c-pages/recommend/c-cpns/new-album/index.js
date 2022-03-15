import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Carousel } from 'antd';
import PmoThemeRCMD from '../../../../../../components/theme-header-recommend'
import { getNewAlbumAction } from '../../store/actionCreators'
import PmoAlbumCover from '../../../../../../components/album-cover';
import styles from './index.module.scss'
const PmoNewAlbum = memo(() => {
  // redux-hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other-hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  return (
    <div className={styles.wrapper}>
      <PmoThemeRCMD title="新碟上架" />
      <div className={styles.connect}>
        <button
          className={styles.arrow + ' arrow-left sprite_02'}
          onClick={e => pageRef.current.prev()}
        ></button>
        <div className={styles.album}>
          <Carousel dots={false} ref={pageRef}>
            {

              [0, 1].map(item => {
                return (
                  // 卡片外层容器
                  <div key={item} className={styles.page}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map((iten, index) => {
                        return (
                          <PmoAlbumCover
                            key={iten.id}
                            info={iten}
                            size="100px"
                            width="118px"
                            bgo="-570px"
                          />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button
          className={styles.arrow + " arrow-right sprite_02"}
          onClick={e => pageRef.current.next()}
        ></button>
      </div>
    </div>
  )
})

export default PmoNewAlbum;