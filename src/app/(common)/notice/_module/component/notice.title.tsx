import { TitleText } from '@/enums/text'

import style from '../css/title.module.css'

export default function NoticeTitle() {
  return (
    <div className={style.titleContainer}>
      <div className={style.title}>{TitleText.NOTICE}</div>
    </div>
  )
}
