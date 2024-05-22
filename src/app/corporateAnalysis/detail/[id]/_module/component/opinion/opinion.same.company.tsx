import style from '../../css/opinion/opinion.same.company.module.css'

export default function OpinionSameCompany() {
  return (
    <>
      <ul>
        <li className={style.pointLi}>
          로봇 산업의 성장 초기 등 로봇 기업들의 실적이 적자 지속되고 있어 PER로 비교하는 것은
          어려운 것으로 판단
        </li>
        <li className={style.pointLi}>
          2023년 상반기 실적을 연환산하여 동종기업과 비교시 두산로보틱스는 동종기업 대비 매출액
          규모는 크지만 시가총액과 매출액을 비교한 PSR은 가장 저평가인 것으로 판단
        </li>
        <li className={style.pointLi}>
          특히, 삼성전자의 지분 투자 등 로봇 관련주로 크게 관심을 받았던 레인보우로보틱스와 비교시
          매출액 규모는 두산로보틱스가 2배 큰 반면 시가총액은 절반 수준으로 신규 상장 이후 상승 여력
          존재할 것으로 판단
        </li>
      </ul>
      <table className={style.forceTable}>
        <thead>
          <tr>
            <th className={style.forceTh}>구분</th>
            <th className={style.forceTh}>동사</th>
            <th className={style.forceTh}>레인보우로보틱스</th>
            <th className={style.forceTh}>뉴로메카</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.tbodyTd}>해당산업</td>
            <td className={style.tbodyTd}>기계</td>
            <td className={style.tbodyTd}>기계</td>
            <td className={style.tbodyTd}>기계</td>
          </tr>
          <tr>
            <td className={style.tbodyTdColor}>시가총액</td>
            <td className={style.tbodyTdColor}>16,853</td>
            <td className={style.tbodyTdColor}>33,285</td>
            <td className={style.tbodyTdColor}>3,980</td>
          </tr>
          <tr>
            <td className={style.tbodyTd}>매출액</td>
            <td className={style.tbodyTd}>474</td>
            <td className={style.tbodyTd}>138</td>
            <td className={style.tbodyTd}>80</td>
          </tr>
          <tr>
            <td className={style.tbodyTdColor}>영업이익</td>
            <td className={style.tbodyTdColor}>-198</td>
            <td className={style.tbodyTdColor}>-466</td>
            <td className={style.tbodyTdColor}>-102</td>
          </tr>
          <tr>
            <td className={style.tbodyTd}>순이익</td>
            <td className={style.tbodyTd}>-186</td>
            <td className={style.tbodyTd}>110</td>
            <td className={style.tbodyTd}>-94</td>
          </tr>
          <tr>
            <td className={style.tbodyTdColor}>PSR</td>
            <td className={style.tbodyTdColor}>35.6</td>
            <td className={style.tbodyTdColor}>241.2</td>
            <td className={style.tbodyTdColor}>49.75</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
