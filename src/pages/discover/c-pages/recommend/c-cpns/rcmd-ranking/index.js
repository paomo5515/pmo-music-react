import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PmoThemeRCMD from '../../../../../../components/theme-header-recommend'
import { getRCMDRankingAction } from '../../store/actionCreators'
import PmoTopRanking from '../../../../../../components/top-ranking'
import styles from './index.module.scss'
const PmoRcmdRanking = memo(() => {

  // redux-hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRCMDRankingAction(0))
    dispatch(getRCMDRankingAction(2))
    dispatch(getRCMDRankingAction(3))
  }, [dispatch])
  return (
    <div className={styles.wrapper}>
      <PmoThemeRCMD title="榜单" />

      <div className={styles.tops}>
        {/* 公共组件 */}
        <PmoTopRanking info={upRanking} />
        <PmoTopRanking info={newRanking} />
        <PmoTopRanking info={originRanking} />
      </div>
    </div>
  )
})

export default PmoRcmdRanking;