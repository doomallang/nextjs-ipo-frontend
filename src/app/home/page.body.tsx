import HomeCarousel from '@/app/home/_module/component/home.carousel'
import HomeIpoSchedule from '@/app/home/_module/component/home.ipo.schedule'
import HomeBenefit from '@/app/home/_module/component/home.benefit'
import HomeNotice from '@/app/home/_module/component/home.notice'
import HomeFooter from '@/app/home/_module/component/home.footer'

import style from './_module/css/body.module.css'

export default function HomeBody() {
  return (
    <div className={style.homeContainer}>
      <HomeCarousel />
      <HomeIpoSchedule />
      <HomeBenefit />
      <HomeNotice />
      <HomeFooter />
    </div>
  )
}
