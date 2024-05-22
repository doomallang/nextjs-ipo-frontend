import { TitleText } from '@/enums/text'

import style from '../css/title.module.css'

export default function QuestionTitle() {
  return (
    <div className={style.titleContainer}>
      <div className={style.title}>{TitleText.FREQUENTLY_ASKED_QUESTION}</div>
    </div>
  )
}
