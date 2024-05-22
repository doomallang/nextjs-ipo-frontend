import style from '../css/footer.module.css'

export default function HomeFooter() {
  return (
    <div className={style.footerContainer}>
      <p className={style.item1}>
        <span className={style.item1Text1}>서비스 제공사 : (주)아톤</span>
        <span className={style.item1Text2}>개인정보처리방침</span>
      </p>
      <div className={style.item2}>
        <p className={style.item2Text}>서비스 가입 / 해지문의</p>
        <p className={style.item2Text}>080-869-4273(무료)</p>
        <p className={style.item2Text}>(평일) 09:00~18:00 (점심시간 12:00~13:00)</p>
      </div>
      <div className={style.item2}>
        <p className={style.item2Text}>
          * 본 서비스는 가입 즉시 서비스가 개시되는 상품으로 청약철회가 불가능합니다. (전자상거래
          등에서의 소비자보호에 관한 법률 제17조 2항 5호에 따라 디지털 콘텐츠의 제공이 개시된 경우
          청약철회를 제공하지 않습니다.)
        </p>
        <p className={style.item2Text}>
          * 서비스를 이용할 때 가입한 요금제에 따라 데이터 요금이 발생할 수 있습니다.
        </p>
      </div>
    </div>
  )
}
