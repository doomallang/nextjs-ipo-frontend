'use client'

import useLink from '@/hooks/useLink'

import style from '../css/contents.module.css'
import { ViewUrl } from '@/enums/url'

const tempData = [
  {
    img: '/images/ipo/img_millie.png',
    name: '밀리의 서재',
    prevPrice: '24,400원',
    nextPrice: '41,400원',
    date: '2024.06.01',
    code: '(416810)',
  },
  {
    img: '/images/ipo/img_inswave.png',
    name: '인스웨이브 시스템즈',
    prevPrice: '24,400원',
    nextPrice: '41,400원',
    date: '2024.06.01',
    code: '(123456)',
  },
  {
    img: '/images/ipo/img_doosan.png',
    name: '두산 로보틱스',
    prevPrice: '14,400원',
    nextPrice: '51,400원',
    date: '2024.05.31',
    code: '(616161)',
  },
  {
    img: '/images/ipo/img_hanssak.png',
    name: '한싹',
    prevPrice: '15,000원',
    nextPrice: '20,000원',
    date: '2024.05.15',
    code: '(175484)',
  },
  {
    img: '/images/ipo/img_revu.png',
    name: '레뷰코퍼레이션',
    prevPrice: '15,000원',
    nextPrice: '20,000원',
    date: '2024.05.15',
    code: '(009281)',
  },
]

export default function CorporateAnalysisContents() {
  const { onLink } = useLink()

  return (
    <div className={style.contentsContainer}>
      {tempData &&
        tempData.map((item, index) => (
          <div
            className={style.contentsItem}
            key={index}
            onClick={() => onLink(`${ViewUrl.CORPORATE_ANALYSIS_DETAIL}/${index}`)}
          >
            <div>
              <span className={style.contentsImageSpan}>
                <img className={style.contentsImage} src={item.img} />
              </span>
            </div>
            <div className={style.contentsText}>
              <div>
                <div className={style.contentsTitleDiv}>
                  <span className={style.contentsTitleSpan1}>{item.name}</span>
                  <span className={style.contentsTitleSpan2}>{item.code}</span>
                </div>
              </div>
              <div className={style.contentsInfoDiv}>
                <dl className={style.contentsInfoDl}>
                  <dt className={style.contentsInfoDt}>상장일</dt>
                  <dd className={style.contentsInfoDd}>{item.date}</dd>
                </dl>
                <dl className={style.contentsInfoDl}>
                  <dt className={style.contentsInfoDt}>공모가</dt>
                  <dd className={style.contentsInfoDd}>{item.prevPrice}</dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
