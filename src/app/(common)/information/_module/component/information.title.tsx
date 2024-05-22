import style from '../css/title.module.css'
import { TitleText } from '@/enums/text'

export default function InformationTitle() {
  return (
    <div className={style.titleContainer}>
      <div className={style.title}>{TitleText.INFORMATION_USE}</div>
    </div>
  )
}
