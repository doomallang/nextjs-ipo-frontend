'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'

import style from '../css/carousel.module.css'

export default function InformationCarousel({
  imgSrcArr,
  contentText,
}: {
  imgSrcArr: string[][]
  contentText: { title: string; desc: string }[]
}) {
  const [activeNum, setActiveNum] = useState(0)
  function change(swiper: any) {
    setActiveNum(swiper.realIndex)
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={(swiper) => change(swiper)}
    >
      {imgSrcArr &&
        imgSrcArr.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} className={index === activeNum ? 'active' : ''}>
              {item.map((item2, index2) => (
                <div key={index2} className={style.imgContainer}>
                  {index2 === 0 ? (
                    <img src={item2} />
                  ) : (
                    <span className={`img${index + 1}_${index2}`}>
                      <img src={item2} />
                    </span>
                  )}
                </div>
              ))}
              <div className={style.contentText}>
                <div
                  className={style.contentTitle}
                  dangerouslySetInnerHTML={{ __html: contentText[index].title }}
                />
                <div
                  className={style.contentDesc}
                  dangerouslySetInnerHTML={{ __html: contentText[index].desc }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      <ul className={style.guide}>
        {imgSrcArr.map((item, index) => (
          <li key={index} className={activeNum === index ? style.guideActive : ''}>
            <button className={style.guideButton}>{index}</button>
          </li>
        ))}
      </ul>
    </Swiper>
  )
}
