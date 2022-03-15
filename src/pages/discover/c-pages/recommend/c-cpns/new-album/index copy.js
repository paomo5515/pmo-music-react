import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Carousel } from 'antd';
import PmoThemeRCMD from '../../../../../../components/theme-header-recommend'
import { getNewAlbumAction } from '../../store/actionCreators'
import PmoAlbumCover from '../../../../../../components/album-cover';
// import styles from 'index.module.scss'
import "./index.scss"
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
    <div className='wrapper'>
      <PmoThemeRCMD title="新碟上架" />
      <div className='connect'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={e => pageRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {

              [0, 1].map(item => {
                return (
                  // 卡片外层容器
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map((iten, index) => {
                        return (
                          <div className='albumcover' key={iten.id}>

                            <div className='album-image'>
                              <img src={iten.picUrl} alt="1" />
                              <a href="/todo" className='cover image_cover'>{iten.name}</a>
                            </div>
                            <div className='album-info'>
                              <div className='name'>{iten.name}</div>
                              <div className='artist text-nowrap'>{iten.artist.name}</div>
                            </div>
                          </div>
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
          className='arrow arrow-right sprite_02'
          onClick={e => pageRef.current.next()}
        ></button>
      </div>
    </div>
  )
})

export default PmoNewAlbum;