// 用户登录图片
import React, { memo } from 'react'
import styles from "./index.module.scss"

const PmoUserLogin = memo(() => {
  return (
    <div className={`${styles.userlogin} sprite_02`}>
      <p className={`$styles.alert`}>
        登陆网易云影月，可以享受无限收藏乐趣，并且无线同步到手机
      </p>
      <a href="/login" className='sprite_02'>用户登录</a>
    </div>
  )
})

export default PmoUserLogin;