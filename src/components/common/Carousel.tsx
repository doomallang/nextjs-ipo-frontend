'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Carousel({ imgSrcArr }: { imgSrcArr: string[] }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      //onSlideChange={() => console.log('slide change')}
      //onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      {imgSrcArr &&
        imgSrcArr.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
