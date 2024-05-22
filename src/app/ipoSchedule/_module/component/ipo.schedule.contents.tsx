import style from '../css/contents.module.css'
import IpoScheduleList from '@/components/ipoSchedule/IpoScheduleList'

const tempData = [
  {
    date: '2024.05.07',
    item: [
      {
        img: '/images/ipo/img_millie.png',
        name: '밀리의 서재',
        prevPrice: '24,400원',
        nextPrice: '41,400원',
        date: '2024.06.01',
      },
      {
        img: '/images/ipo/img_inswave.png',
        name: '인스웨이브 시스템즈',
        prevPrice: '24,400원',
        nextPrice: '41,400원',
        date: '2024.06.01',
      },
    ],
  },
  {
    date: '2024.05.06',
    item: [
      {
        img: '/images/ipo/img_doosan.png',
        name: '두산 로보틱스',
        prevPrice: '14,400원',
        nextPrice: '51,400원',
        date: '2024.05.31',
      },
    ],
  },
  {
    date: '2024.05.02',
    item: [
      {
        img: '/images/ipo/img_hanssak.png',
        name: '한싹',
        prevPrice: '15,000원',
        nextPrice: '20,000원',
        date: '2024.05.15',
      },
      {
        img: '/images/ipo/img_revu.png',
        name: '레뷰코퍼레이션',
        prevPrice: '15,000원',
        nextPrice: '20,000원',
        date: '2024.05.15',
      },
    ],
  },
]

export default function IpoScheduleContents() {
  return (
    <div className={style.contentsContainer}>
      <IpoScheduleList data={tempData} />
    </div>
  )
}
