import style from '../../css/point/point.financial.status.module.css'

export default function PointFinancialStatus() {
  return (
    <>
      <div className={style.pointDiv}>1. 글로벌 협동로봇 시작의 고성장 예상</div>
      <ul>
        <li className={style.pointLi}>
          2020년 매출액은 202억원, 2023년 상반기 기준 매출액은 237억원으로 매출액은 꾸준히 성장 중
        </li>
        <li className={style.pointLi}>영업이익은 적자 지속</li>
        <li className={style.pointLi}>
          공격적인 해외 마케팅 확대와 개발 활동 강화에 따른 R&D 비용 증가 등의 영향으로 수익성은
          부진
        </li>
        <li className={style.pointLi}>
          지속적인 매출 성장 및 원재료 공급 채널 다원화를 통한 원가절감 추진 등 수익성 회복을 위한
          노력 시사
        </li>
      </ul>
      <div>
        <img src={'/images/ipo/sam_graph_test05.png'} className={style.pointImage} />
      </div>
    </>
  )
}
