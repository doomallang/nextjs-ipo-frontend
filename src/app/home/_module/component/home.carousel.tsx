import Carousel from '@/components/common/Carousel'

import style from '../css/carousel.module.css'

export default function HomeCarousel() {
  const imgSrcArr = ['/images/banner/img_banner01.png', '/images/banner/img_banner02.png']

  return (
    <div className={style.carouselContainer}>
      <Carousel imgSrcArr={imgSrcArr} />
    </div>
  )
}
