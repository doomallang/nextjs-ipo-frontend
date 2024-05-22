import style from '../css/button.module.css'
import { TitleText } from '@/enums/text'

export default function IpoScheduleButton() {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button}>
        <span className={style.button}>{TitleText.MORE}</span>
      </button>
    </div>
  )
}
