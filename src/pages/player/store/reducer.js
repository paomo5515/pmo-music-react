import { Map } from "immutable";
import * as actionTypes from './constant'

const defaultState = Map({
  // 播放歌曲列表
  playList: [],
  currentSongIndex: 0,
  // 播放顺序 0顺序播放 1随机 2 循环
  sequence: 0,
  // 当前歌曲
  currentSong: {},
  // 歌词列表
  lyricList: [],
  // 正在播放当前歌曲的歌词
  currentLyricIndex: 0

})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index)
    default:
      return state;
  }
}

export default reducer;