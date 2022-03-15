import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreator'
import { getSizeImage, formatDate, getPlaySong } from '../../../utils/format-utils'
// import "./index.scss"
import styles from './index.module.scss'
// 底部播放
const PmoAppPlayerBar = memo(() => {
  // props and state 
  const [currentTime, setCurrentTime] = useState(0)
  // 进度条
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)


  // redux-hooks
  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other-hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    // audio 的 src 只需要设置一次
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])


  // other-handle
  // 防止第一次没有值
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  // 总歌曲时长 
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(currentTime, "mm:ss")


  // handle-function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime * 1000
    // 当前播放时长
    // console.log(e.target.currentTime);
    // 如果当前不在改变 播放进度条 的情况下
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress(currentTime / duration * 100)
    }

    // 获取当前的歌词 
    let i = 0;
    for (; i < lyricList.length; i++) {
      const lyricItem = lyricList[i];
      if (currentTime < lyricItem.time) {
        break;
      }
    }
    // 当前正在播放的歌词
    // console.log(lyricList[i - 1]); 
    // 歌词改变时  redux 会被频繁操作,所以性能优化
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        // key相同就会出现一个
        key:"lyric",
        content: content,
        duration: 0,
        className:"lyricList"
      })
    }
  }

  // 改变播放顺序
  const changeSequence = (e) => {
    // 随机按钮总共有三种变化
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))

    switch (sequence + 1) {
      case 1:
        return e.target.style.backgroundPosition = "-66px -248px"
      case 2:
        return e.target.style.backgroundPosition = "-66px -344px"
      // case 3:
      //   return e.target.style.backgroundPosition = "-3px -344px"
      default:
        return e.target.style.backgroundPosition = "-3px -344px"
    }
  }
  // 点击上一曲或下一曲
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  // 这首歌曲播放完后
  const handleMusicEnd = () => {
    if (sequence === 2) { // 单曲循环
      // 将时间设置为 0
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  // 播放进度条改变
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
    // console.log("change", value);
  }, [duration])

  // 播放进度条改变之后
  const silderAfterChange = useCallback((value) => {
    // console.log("end", value); // 24
    // 等到手指放手的时候
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)

    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  return (
    <div className={styles.wrapper + ' sprite_player'}>
      {/* 中间所有内容 */}
      <div className={styles.playContent + '  wrap-v2'}>

        {/* 控制播放按钮 */}
        <div className={styles.control}>
          {/* 上一曲按钮 */}
          <button
            className={styles.prev + ' sprite_player'}
            onClick={e => changeMusic(-1)}></button>

          {/* 播放按钮 */}
          <button
            className={styles.play + ' sprite_player'}
            style={{ backgroundPosition: isPlaying ? "0 -165px" : "0 -204px" }}
            onClick={e => playMusic()}
          ></button>

          {/* 下一曲按钮 */}
          <button
            className={styles.next + ' sprite_player'}
            onClick={e => changeMusic(1)}
          ></button>
        </div>
        {/* 播放信息 */}
        <div className={styles.playinfo}>
          <div className={styles.image}>
            {/* 播放按钮 */}
            <NavLink to="discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="1" />
            </NavLink>
          </div>
          <div className={styles.info}>
            {/* 歌曲 */}
            <div className={styles.song}>
              <div className={styles.songName}>{currentSong.name}</div>
              <a href="#/" className={styles.singerName}>{singerName}</a>
            </div>
            {/* 进度条 */}
            <div className={styles.progress}>
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={silderAfterChange} />
              {/* 时间 */}
              <div className={styles.time}>
                <span className={styles.nowTime}>{showCurrentTime}</span>
                <span className={styles.divider}>/</span>
                <span className={styles.duration}>{showDuration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧图标 */}
        <div className={styles.operator}>
          <div className={styles.left}>
            <button className={`sprite_player ${styles.btn} ${styles.favor}`}></button>
            <button className={`sprite_player ${styles.btn} ${styles.share}`}></button>
          </div>
          <div className={`${styles.right} sprite_player`}>
            <button className={`sprite_player ${styles.btn} ${styles.volume}`}></button>
            {/* 播放顺序按钮 */}
            <button
              className={`sprite_player ${styles.btn} ${styles.loop}`}
              onClick={e => changeSequence(e)}
              style={{ backgroundPosition: "-3px -344px" }}
            ></button>
            <button className={`sprite_player ${styles.btn} ${styles.playlist}`}></button>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={e => handleMusicEnd()} />
    </div >
  )
})

export default PmoAppPlayerBar;