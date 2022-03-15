import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
const PmoThemeRCMD = memo((props) => {
  const { title, keywords } = props
  return (
    <div className={styles.headerwrapper + " sprite_02"}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.keyword}>
          {
            keywords.map((item, index) => {
              return (
                <div className={styles.item} key={item}>
                  <a className={styles.ai} href="todo">{item}</a>
                  <span className={styles.divider}>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.right}>
        <a className={styles.ar} href="todo">更多</a>
        <i className={styles.icon + " sprite_02"}></i>
      </div>
    </div>
  )
})
PmoThemeRCMD.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
PmoThemeRCMD.defaultProps = {
  keywords: []
}
export default PmoThemeRCMD;