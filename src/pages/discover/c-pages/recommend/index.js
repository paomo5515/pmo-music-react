import React, { memo } from 'react'
import PmoTopBanner from './c-cpns/top-banner';
import PmoHotRecommend from './c-cpns/hot-recommemd';
import PmoNewAlbum from './c-cpns/new-album';
import PmoRcmdRanking from './c-cpns/rcmd-ranking';
import PmoPlayer from '../../../player';
import styles from './index.module.scss'
const PmoRecommend = memo((props) => {
  return (
    <div className={styles.recommend}>

      <div className={styles.topbanner}>
        <PmoTopBanner />
      </div>
      <div className={styles.content + " wrap-v2"}>
        <div className={styles.left}>
          <PmoHotRecommend />
          <PmoNewAlbum />
          <PmoRcmdRanking />
        </div>
        <div className={styles.right}>
          <PmoPlayer />
        </div>
      </div>
    </div>
  )
})


export default PmoRecommend;


/* 
const PmoRecommend = memo((props) => {
  const { getBanners,topBanners } = props;
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <h2>PmoRecommend：{topBanners.length}</h2>
  )
})

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})
const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannersAction())
  }
}) 
connect(mapStateToProps, mapDispatchToProps)(PmoRecommend);
*/