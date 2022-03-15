import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import { dicoverMenu } from '../../common/local-data';
import styles from "./index.module.scss"

const PmoDiscover = memo(() => {

  return (
    <div className={styles.top}>
      <div className={styles.discover + " wrap-v1"} >
        {
          dicoverMenu.map((item, index) => {
            return (
              <div className={styles.item} key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

export default PmoDiscover;