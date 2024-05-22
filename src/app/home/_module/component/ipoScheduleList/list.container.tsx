import style from './css/list.container.module.css'
import IpoScheduleListItem from '@/app/home/_module/component/ipoScheduleList/list.item'

export default function IpoScheduleListContainer() {
  return (
    <div className={style.ipoListContainer}>
      <div className={style.ipoDate}>2024.05.07</div>
      <IpoScheduleListItem />
      <IpoScheduleListItem />
      <div className={style.ipoDate}>2024.05.07</div>
      <IpoScheduleListItem />
      <IpoScheduleListItem />
      <div className={style.ipoMore}>
        <button className={style.ipoMoreDate}>
          <span className={style.ipoDateSpan}>더보기</span>
        </button>
      </div>
    </div>
  )
}
