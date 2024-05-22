'use client'

import style from '../css/content.module.css'
import NoticeContentItem from '@/app/(common)/notice/_module/component/notice.content.item'

export default function NoticeContent() {
  return (
    <div className={style.contentContainer}>
      <div className={style.contentWrap}>
        <div className={style.contentMid}>
          <div className={style.noticeAccordianWrap}>
            <div className={style.noticeList}>
              {[1, 2, 3].map((num) => (
                <NoticeContentItem key={num} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
