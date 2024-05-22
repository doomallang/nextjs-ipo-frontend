import IpoScheduleContents from '@/app/ipoSchedule/_module/component/ipo.schedule.contents'

import style from './_module/css/body.module.css'
import IpoScheduleButton from '@/app/ipoSchedule/_module/component/ipo.schedule.button'

export default function IpoScheduleBody() {
  return (
    <div className={style.bodyContainer}>
      <IpoScheduleContents />
      <IpoScheduleButton />
    </div>
  )
}
