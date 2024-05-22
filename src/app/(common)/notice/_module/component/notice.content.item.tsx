import style from '../css/content.item.module.css'
import { Collapse } from 'react-collapse'
import { useState } from 'react'

export default function NoticeContentItem() {
  const [open, setOpen] = useState(false)

  function openCollapse() {
    setOpen(!open)
  }

  return (
    <div className={style.item}>
      <div className={open ? style.titleContainerUp : style.titleContainer} onClick={openCollapse}>
        <div className={style.titleWrap}>제목이 들어갑니다.</div>
        <span className={style.date}>2023.04.11</span>
      </div>
      <div className={style.descContainer}>
        <Collapse isOpened={open}>
          <div className={style.desc}>
            공지사항 상세 내용이 출력됩니다. 공지사항 상세 내용이 출력됩니다. 공지사항 상세 내용이
            출력됩니다. 공지사항 상세 내용이 출력됩니다.
          </div>
        </Collapse>
      </div>
    </div>
  )
}
