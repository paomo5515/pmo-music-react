import { Map } from 'immutable'

import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING
} from "./constant"

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  // 新碟上架
  newAlbums: [],

  //榜单
  upRanking:[],
  newRanking:[],
  originRanking:[]
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    /* return { ...state, topBanners: action.topBanners } */
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums)

    case CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    default:
      return state;
  }
}
export default reducer;