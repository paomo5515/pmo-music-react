import request from './request'

// 获取需要播放的歌曲
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 获取播放歌曲的歌词
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}