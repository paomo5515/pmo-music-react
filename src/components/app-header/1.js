import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import {Input} from 'antd'
import { headerLinks } from '../../common/local-data';

import './index.scss'
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
    <div className="header">
      <div className="content wrap-v1">
        <div className="left">
          <NavLink to='/discover' className='logo sprite_01'>网易云音乐</NavLink>
          <div className="headerList">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="right">
            <Input placeholder='音乐/视频/电台'/>
        </div>
      </div>
      <div className="divier"></div>
    </div>
  )
})

export default PmoAppHeader;