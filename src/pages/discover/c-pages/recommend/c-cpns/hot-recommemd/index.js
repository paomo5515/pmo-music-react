import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PmoThemeRCMD from '../../../../../../components/theme-header-recommend';
import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '../../../../../../common/constant';
import HYSongsCover from '../../../../../../components/songs-cover'
import styles from './index.module.scss'
const PmoHotRecommend = memo(() => {
  // state

  // redux-hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other-hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <div className={styles.hotrecommendwrapper}>
      <PmoThemeRCMD title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />

      <div className={styles.list}>
        {
          hotRecommends.map((item, index) => {
            return <HYSongsCover key={item.id} info={item} />
          })
        }
      </div>
    </div>
  )
})

export default PmoHotRecommend;