'use client'

import style from '../css/common.title.module.css'
import { TitleText } from '@/enums/text'
import useLink from '@/hooks/useLink'

export default function CommonTitle() {
  const { onBack } = useLink()
  return (
    <div className={style.titleContainer}>
      <button className={style.buttonContainer} onClick={onBack}>
        <span className={style.button}>
          <img src={'/images/common/back_btn.png'} />
        </span>
      </button>
      <div className={style.title}>{TitleText.TITLE}</div>
    </div>
  )
}
