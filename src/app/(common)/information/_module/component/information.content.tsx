import style from '../css/content.module.css'
import InformationCarousel from '@/app/(common)/information/_module/component/information.carousel'

export default function InformationContent() {
  const imgSrcArr = [
    ['/images/information/img_instruct01.png', '/images/information/img_instruct01_01.png'],
    [
      '/images/information/img_instruct02.png',
      '/images/information/img_instruct02_01.png',
      '/images/information/img_instruct02_02.png',
    ],
    [
      '/images/information/img_instruct03.png',
      '/images/information/img_instruct03_01.png',
      '/images/information/img_instruct03_02.png',
    ],
  ]

  const contentText = [
    {
      title: 'IPO일정 한눈에 확인 가능',
      desc: '계좌 : 공모주 청약을 위한 주간사 증권계좌 준비 기간<br/>청약 : 주간사 증권계좌에 청약 증거금 입금 후 청약 신청<br />상장 : 배정 받은 주식 매매 가능',
    },
    {
      title: '기업분석을 통해<br/>상장 후수익률 확인 가능',
      desc: '상장 종목 : 공모가 대비 시가, 종가 매도 수익률 확인<br />상장예정종목 : 상장예정일, 공모가 확인',
    },
    {
      title: '기업 상세 분석을 통해 종목에 대한<br />궁금증 해결 가능',
      desc: '종목에 대한 투자전략, 투자포인트, 투자의견 제공',
    },
  ]

  return (
    <div className={style.contentContainer}>
      <div className={style.contentWrap}>
        <div className={style.contentMid}>
          <div className={style.guideContainer}>
            <div className={style.guideContentContainer}>
              <div className={style.guideTop}>
                <div className={style.guideTopWrap}>
                  <p className={style.guideTopText}>
                    이해하기 쉽고 편하게 따라할 수 있는 공모주정보 서비스를 이용해 보세요.
                  </p>
                </div>
              </div>
              <div className={style.guideMid}>
                <InformationCarousel imgSrcArr={imgSrcArr} contentText={contentText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
