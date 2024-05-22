import style from '../../css/opinion/opinion.demand.forecast.module.css'

export default function OpinionDemandForecast() {
  return (
    <>
      <ul>
        <li className={style.pointLi}>
          두산로보틱스의 수요 예측 결과는 경쟁률 272:1 수준으로최근 상장한 5개사 평균 대비 낮음
        </li>
        <li className={style.pointLi}>
          다만, 금융 당국의 IPO 건전성 제고 방안에 따른 기관 투자자들의 허수 청약이 사라져 낮게 나온
          것으로 판단
        </li>
        <li className={style.pointLi}>
          상당수의 기관투자자들은 희망 공모가 밴드 상단 가격인 26,000원 이상에 배팅한 만큼 수요 예측
          경쟁률이 최근 평균보다 다소 낮게 나왔더라도 크게 우려할 수준은 아닌 것으로 판단
        </li>
      </ul>
      <table className={style.forceTable}>
        <thead>
          <tr>
            <th className={style.forceTh}>두산로보틱스</th>
            <th className={style.forceTh}>최근 상장 5개사 평균</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.tbodyTd}>272.03</td>
            <td className={style.tbodyTd}>524.05</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
