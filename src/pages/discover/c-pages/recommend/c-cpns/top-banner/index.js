import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import {
  useDispatch,
  useSelector,
  shallowEqual
} from 'react-redux'

import { Carousel } from 'antd';

import { getTopBannersAction } from '../../store/actionCreators'

import styles from './index.module.scss'

const PmoTopBanner = memo(() => {

  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和 redux关联：获取数据 和 进行操作
  // useSelector 要求有一个返回值 将返回值作为 useSelector的返回值 到时候赋值到这个变量上
  // useSelector 它是进行全等(===)比，即使是类型不一样 他也会返回 false，导致组件重新渲染
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
    // topBanners: state.get("recommend").get("topBanners")
    // topBanners: state.recommend.get("topBanners")
    // topBanners: state.recommend.topBanners
  }), shallowEqual)


  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const bannerRef = useRef()
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"
  // console.log(bgImage);

  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.background} src={bgImage} alt={bgImage} />
        <div className={styles.banner + " wrap-v2"}>
          <div className={styles.left}>
            <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
              {
                topBanners.map((item, index) => {
                  return (
                    <div className={styles.item} key={item.imageUrl} >
                      <img className={styles.image} src={item.imageUrl} alt={item.typeTitles} />
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className={styles.right}>
            <a className={styles.a}
              href="https://music.163.com/#/download"
              rel="noreferrer" target="_blank"> </a>
          </div>


          <div className={styles.control}>
            <button
              className={"btn " + styles.left}
              onClick={e => bannerRef.current.prev()}
            ></button>
            <button
              className={"btn " + styles.right}
              onClick={e => bannerRef.current.next()}
            ></button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default PmoTopBanner;