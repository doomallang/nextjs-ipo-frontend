'use client'

import useLink from '@/hooks/useLink'
import style from './_module/css/body.module.css'

export default function WorkNoticeBody() {
  const { onBack } = useLink()

  return (
    <div className={style.bodyContainer}>
      <div className={style.bodyWrap}>
        <div className={style.contentContainer}>
          <div className={style.errorContainer}>
            <div className={style.imageContainer}>
              <img src={'/images/common/ico_notice.png'} className={style.image} />
            </div>
            <div className={style.titleContainer}>
              [작업공지]
              <br />
              00월 00일 00:00 ~ 00월 00일 00:00
            </div>
            <p className={style.pContainer}>
              공지사항에 대한 내용입니다.
              <br />
              공지사항에 대한 내용입니다.
              <br />
              공지사항에 대한 내용입니다.
              <br />
            </p>
            <button className={style.button} onClick={onBack}>
              <span className={style.buttonText}>닫기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
