import * as actionTypes from './constant';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList
} from '../../../../../services/recommend';

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// 为什么不直接传入这个函数  应为它有可能依赖一些参数
export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannersAction(res))
    })
  }
}


const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      // console.log(res);
      dispatch(changeHotRecommendAction(res))
    })
  }
}

// 当返回值是对象时  就会执行 reducer 更新数据
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

// 返回值是函数，就会执行函数
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // console.log(res);
      dispatch(changeNewAlbumAction(res))
    })
  }
}


const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})
// 榜单数据
export const getRCMDRankingAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      // console.log(res);
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRankingAction(res))
          break;
        default:
      }
    })
  }
}