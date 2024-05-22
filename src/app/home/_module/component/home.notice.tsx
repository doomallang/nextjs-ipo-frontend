'use client'

import style from '../css/notice.module.css'
import HomeNoticeItem from '@/app/home/_module/component/notice/notice.item'
import { TitleText } from '@/enums/text'
import useLink from '@/hooks/useLink'
import { ViewUrl } from '@/enums/url'

export default function HomeNotice() {
  const { onLink } = useLink()

  return (
    <div className={style.noticeContainer}>
      <div onClick={() => onLink(ViewUrl.NOTICE)}>
        <HomeNoticeItem text={TitleText.NOTICE} imgSrc={'/images/home/ico_notice.png'} />
      </div>
      <div onClick={() => onLink(ViewUrl.QUESTION)}>
        <HomeNoticeItem
          text={TitleText.FREQUENTLY_ASKED_QUESTION}
          imgSrc={'/images/home/ico_faq.png'}
        />
      </div>
      <div onClick={() => onLink(ViewUrl.INFORMATION)}>
        <HomeNoticeItem text={TitleText.INFORMATION_USE} imgSrc={'/images/home/ico_guide.png'} />
      </div>
    </div>
  )
}
