import style from './_module/css/body.module.css'

export default function JoinIntroBody() {
  return (
    <div className={style.bodyContainer}>
      <div className={style.bodyWrap}>
        <div>
          <div className={style.titleContainer}>PASS 공모주정보 서비스</div>
          <p className={style.pContainer}>
            개인투자자 눈높이에 맞는 투자정보서비스를 제공하고
            <br />
            이해하기 쉽고 편하게 따라할 수 있는 공모주정보 서비스를
            <br />
            제공합니다.
          </p>
          <div className={style.imageContainer}>
            <img src={'/images/common/img_intro01.png'} className={style.image} />
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>공모주정보 서비스 이용 방법</div>
          <div className={style.contentWrap}>
            <div className={style.subTitleContainer}>
              <em className={style.titleEm}>
                <span className={style.titleSpan}>IPO일정</span>
              </em>
              을 한눈에!!
            </div>
            <p className={style.subPContainer}>
              진행 단계별 공모주 정보를 제공
              <br />
              공모주 청약 일정 확인 및 준비 가능
              <br />
              · 계좌 : 공모주 청약을 위한 주간사 증권계좌 준비 기간
              <br />
              · 청약 : 주간사 증권계좌에 청약 증거금 입금 후 청약 신청
              <br />· 상장 : 배정 받은 주식 매매 가능
            </p>
            <div className={style.subImageContainer}>
              <img src={'/images/common/img_intro02.png'} className={style.subImage} />
            </div>
          </div>
          <div className={style.contentWrap}>
            <div className={style.subTitleContainer}>
              <em className={style.titleEm}>
                <span className={style.titleSpan}>기업분석 콘텐츠</span>
              </em>
              확인
            </div>
            <p className={style.subPContainer}>
              상장 종목의 공모가 대비 시가, 종가 매도
              <br />
              수익률 확인 가능
              <br />
              기업 상세 분석을 통해 종목에 대한 궁금증 해결 가능
              <br />· 종목에 대한 투자전략, 투자포인트, 투자의견 제공
            </p>
            <div className={style.subImageContainer}>
              <img src={'/images/common/img_intro03.png'} className={style.subImage} />
            </div>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <span className={style.titleColor}>이 모든 혜택이</span> 월 9,900원
            <p className={style.titleP}>(부가세포함)</p>
          </div>
          <p className={style.contentP}>
            1) IPO일정은 모든 고객에게 제공 가능
            <br />
            2) 기업분석 콘텐츠는 무료회원에게 일부만 제공 가능
          </p>
        </div>
      </div>
      <div className={style.descContainer}>
        <div className={style.descTitle}>기타 안내사항</div>
        <ul>
          <li>
            <p className={style.descP}>
              본 서비스는 가입 즉시 서비스가 개시되는 상품으로 청약철회가 불가능합니다. (전자상거래
              등에서의 소비자보호에 관한 법률 제17조 2항 5호에 따라 디지털 콘텐츠의 제공이 개시된
              경우 청약철회를 제공하지 않습니다.)
            </p>
          </li>
          <li>
            <p className={style.descP}>
              서비스를 이용할 때 가입한 요금제에 따라 데이터 요금이 발생할 수 있습니다.
            </p>
          </li>
          <li>
            <p className={style.descP}>
              서비스 가입/해지 문의는 공모주정보 고객센터 (080-869-4273, 무료)를 통해 가능합니다.
            </p>
          </li>
        </ul>
      </div>

      <div className={style.footer}>
        <button className={style.button}>
          <div className={style.buttonText}>동의하고 시작하기</div>
        </button>
      </div>
    </div>
  )
}
