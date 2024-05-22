import Carousel from '@/components/common/Carousel'

import style from '../css/benefit.module.css'
import { TitleText } from '@/enums/text'
import ContentsTitle from '@/components/common/_module/component/ContentsTitle'

export default function HomeBenefit() {
  const imgSrcArr = ['/images/banner/img_banner02.png', '/images/banner/img_banner01.png']

  return (
    <div className={style.benefitContainer}>
      <ContentsTitle text={TitleText.BENEFIT} />
      <Carousel imgSrcArr={imgSrcArr} />
    </div>
  )
}
