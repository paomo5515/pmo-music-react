import React, { memo, Fragment } from 'react'
import { footerLinks, footerImages } from '../../common/local-data';
import styles from "./index.module.scss"
const PmoAppFooter = memo(() => {
  return (
    <div className={styles.foo}>
      <div className={styles.footer + " wrap-v2"}>
        <div className={styles.copy}>
          <div className={styles.link}>
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link}>{item.title}</a>
                    <span className={styles.border}></span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className={styles.info}>
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
          </div>

          <div className={styles.filing}>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              粤B2-20090191-18  工业和信息化部备案管理系统网站&nbsp;&nbsp;浙公网安备 33010902002564号
            </a>
          </div>
        </div>
        <div className={styles.right}>
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={index}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </div>
      </div>
    </div>
  )
})

export default PmoAppFooter;