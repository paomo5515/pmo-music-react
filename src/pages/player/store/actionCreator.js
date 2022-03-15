import { getLyric, getSongDetail } from '../../../services/player'
import {
  CHANGE_CURRENT_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from './constant'
import { getRandomNumber } from '../../../utils/math-utils'
import { parseLyric } from '../../../utils/parse-lyric'

// 当前歌曲
const changeCurrentSongAction = (currentSong) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong
})
// 播放列表
const changePlayListAction = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList
})
//歌曲索引
const changeCurrentSongIndexAction = (index) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  index
})
// 歌词列表
const changeLyricListAction = (lyricList) => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})


// 歌曲顺序
// 对外暴露的 action
export const changeSequenceAction = (sequence) => ({
  type: CHANGE_SEQUENCE,
  sequence
})

// 播放歌曲的歌词
export const changeCurrentLyricIndexAction = (index) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  index
})

// 播放顺序歌曲的处理
export const changeCurrentIndexAndSongAction = (tag) => {
  // 为了可以拿到 dispatch
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"])
    // 当前播放歌曲的 index
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    // 播放列表
    const playList = getState().getIn(["player", "playList"])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length)
        // let randomIndex = -1
        // 如果随机后的相等，再随机一次
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        // 当前播放歌曲的 index
        currentSongIndex = randomIndex
        break;
      default: //顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        // 小于0 直接 重头播放
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }
    const currentSong = playList[currentSongIndex];
    //改变播放歌曲的索引
    dispatch(changeCurrentSongAction(currentSong))
    // 改变播放索引
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    dispatch(getLyricAtion(currentSong.id))
  }
}

// 异步 action
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1. 根据id 查找 playlist 中是否已经有了 该歌曲
    const playList = getState().getIn(["player", "playList"])
    // 如果为真 返回这个 index，如果没有则返回 -1
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2.判断是否找到歌曲
    let song = null;
    if (songIndex !== -1) { // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      // 取出歌曲
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song))
      // 请求歌词
      dispatch(getLyricAtion(song.id))
    } else { // 没有找到歌曲，
      // 就去请求 歌曲数据
      getSongDetail(ids).then(res => {
        // 防止 res.songs = undefined
        song = res.songs && res.songs[0];
        if (!song) return;
        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);
        // 2.更新redux 中的数据
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))

        // 3.请求歌词
        dispatch(getLyricAtion(song.id))
      })
    }
  }
}

// 获取歌词
export const getLyricAtion = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      // 解析歌词
      const lyric = res.lrc.lyric;
      // console.log(lyric);
      const lyricList = parseLyric(lyric)
      // console.log(lyricList);
      dispatch(changeLyricListAction(lyricList))
    })
  }
}