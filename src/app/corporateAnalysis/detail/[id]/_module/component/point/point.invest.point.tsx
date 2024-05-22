import style from '../../css/point/point.invest.point.module.css'

export default function PointInvestPoint() {
  return (
    <>
      <div className={style.pointWrap}>
        <div className={style.pointDiv}>1. 주가 상승 요인</div>
        <ul>
          <li className={style.strongLi}>협동로봇 시장 성장에 따른 동반 성장 예상</li>
          <p className={style.pointP}>
            전 산업에 걸쳐 다양한 고객을 보유 중이며 다양한 분야에서 레퍼런스 확보
            <br />
            다양한 제품 라인업 보유로 시장 점유율 상승 및 높은 제품 퀄리티와 가격 경쟁력 확보 등
            지속적인 점유율 상승 예상
          </p>
          <li className={style.strongLi}>판매채널 확대를 통한 실적 성장 예상</li>
          <p className={style.pointP}>
            2018년 판매채널 19개에서 2022년 89배로 4배 가까이 성장했으며 2026년 219개로 확대할 계획
          </p>
          <li className={style.strongLi}>
            로봇 생태계 확장 및 M&A를 통한 기술 고도화 추진으로 중장기 성장 기대감 확대
          </li>
        </ul>
      </div>
      <div className={style.pointWrap}>
        <div className={style.pointDiv}>2. 주가 상승 요인</div>
        <ul>
          <li className={style.strongLi}>단기적인 실적 부진</li>
          <p className={style.pointP}>
            중장기 성장을 위한 마케팅 확대와 R&D 비용 등의 증가로 단기적으로 실적 부진할 가능성 존재
          </p>
          <li className={style.strongLi}>글로벌 경기 위축 우려</li>
          <p className={style.pointP}>
            제조업 및 서비스 업종 동향에 영향을 받는 만큼 글로벌 경기의 위축은 영업환경에 부정적인
            영향을 미칠 수 있음
          </p>
          <li className={style.strongLi}>원자재 가격 변동 위험</li>
          <p className={style.pointP}>
            주요 원자재인 알루미늄, 희토류, 반도체 소자 등의 가격이 상승할 경우 수익성 우려 존재
          </p>
        </ul>
      </div>
    </>
  )
}
