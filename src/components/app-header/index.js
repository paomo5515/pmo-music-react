import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '../../common/local-data';

import styles from './index.module.scss'
const PmoAppHeader = memo(() => {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>{item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.content + " wrap-v1"}>
        <div className={styles.left}>
          <NavLink to='discover/' className={styles.logo + " sprite_01"}>网易云音乐</NavLink>
          <div className={styles.headerList}>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className={styles.item}>
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.right}>
          <Input className="rightSearch" placeholder='音乐/视频/电台' prefix={<SearchOutlined />} />
          <button className={styles.author}>创作者中心</button>
          <button className={styles.login}>登录</button>
        </div>
      </div>
      <div className={styles.divier}></div>
    </div>
  )
})

export default PmoAppHeader;