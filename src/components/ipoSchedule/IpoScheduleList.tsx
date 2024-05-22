import style from './_module/css/list.module.css'
import IpoScheduleItem from '@/components/ipoSchedule/_module/component/IpoScheduleItem'

export default function IpoScheduleList({ data }: { data: any }) {
  return (
    <>
      {data &&
        data.map((item: any, index: number) => (
          <div className={style.ipoListContainer} key={index}>
            <div className={style.ipoDate}>{item.date}</div>
            <IpoScheduleItem data={item.item} />
          </div>
        ))}
    </>
  )
}
