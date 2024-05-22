import style from '../../css/point/point.forward.industry.module.css'

export default function PointForwardIndustry() {
  return (
    <>
      <div className={style.pointDiv}>1. 글로벌 협동로봇 시작의 고성장 예상</div>
      <ul>
        <li className={style.pointLi}>
          협동로봇은 직원들과 같은 작업 공간에서 일하도록 설계된 로봇
        </li>
        <li className={style.pointLi}>일반적으로 6축 이상의 관절로 구성된 로봇팔을 의미</li>
        <li className={style.pointLi}>
          협동로봇은 산업용 로봇과 달리 산업용과 비산업용에 모두 사용 가능하며 25kg 미만의 가벼운
          무게가 특징 가벼운 무게로 다양한 산업 및 생활에 안전하게 적용 가능
        </li>
        <li className={style.pointLi}>
          현존하는 협동로봇 중 가장 무거운 중량을 운반할 수 있는 H시리즈(가반하중 20 ~ 25kg)를
          글로벌 최초로 출시하여 가반하중 5 ~ 25kg를 모두 커버하는 라인업 완성
        </li>
        <li className={style.pointLi}>
          주력사업인 협동로봇 외 커피 및 튀김과 같은 솔루션 사업 매출의 신규 발생 기대
        </li>
      </ul>
      <div>
        <img src={'/images/ipo/sam_graph_test03.png'} className={style.pointImage} />
      </div>
      <div className={style.pointDiv}>2. 제조업 및 서비스 시장에서 협동로봇의 필요성 확대</div>
      <ul>
        <li className={style.pointLi}>
          협동로봇은 직원들과 같은 작업 공간에서 일하도록 설계된 로봇
        </li>
        <li className={style.pointLi}>일반적으로 6축 이상의 관절로 구성된 로봇팔을 의미</li>
        <li className={style.pointLi}>
          협동로봇은 산업용 로봇과 달리 산업용과 비산업용에 모두 사용 가능하며 25kg 미만의 가벼운
          무게가 특징 가벼운 무게로 다양한 산업 및 생활에 안전하게 적용 가능
        </li>
      </ul>
      <div>
        <img src={'/images/ipo/sam_graph_test04.png'} className={style.pointImage} />
      </div>
    </>
  )
}
