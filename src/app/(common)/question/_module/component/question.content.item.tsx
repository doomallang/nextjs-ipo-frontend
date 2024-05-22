'use client'

import style from '../css/content.item.module.css'
import { Collapse } from 'react-collapse'
import { useState } from 'react'

export default function QuestionContentItem() {
  const [open, setOpen] = useState(false)

  function openCollapse() {
    setOpen(!open)
  }

  return (
    <div className={style.item}>
      <div className={open ? style.titleContainerUp : style.titleContainer} onClick={openCollapse}>
        <div className={style.titleWrap}>Q. 제목이 들어갑니다.</div>
      </div>
      <div className={style.descContainer}>
        <Collapse isOpened={open}>
          <div className={style.desc}>
            <span className={style.descSpan}>A.</span>
            <div>
              공지사항 상세 내용이 출력됩니다.
              <br />
              공지사항 상세 내용이 출력됩니다.
              <br />
              공지사항 상세 내용이 출력됩니다.
              <br />
              공지사항 상세 내용이 출력됩니다.
              <br />
              공지사항 상세 내용이 출력됩니다.
              <br />
              공지사항 상세 내용이 출력됩니다.
              <br />
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}
