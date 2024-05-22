import style from '../../css/opinion/opinion.invest.opinion.module.css'

export default function OpinionInvestOpinion() {
  return (
    <>
      <div className={style.pointWrap}>
        <div className={style.pointDiv}>1. 투자의견</div>
        <p className={style.pointP}>
          인수인이 적용한 PER 이슈 등 동사 공모가에 대한 고평가 논란이 존재하지만 성장하는 산업의
          국내 1위 기업임을 감안하면 상장일 주가가 공모가보다 높게 형성된다면 매도, 주가가 낮다면
          중장기 관점에서 보유 및 추가 매수 접근 유효 판단
        </p>
      </div>
      <div className={style.pointWrap}>
        <div className={style.pointDiv}>2. 적정주가</div>
        <p className={style.pointP}>
          인수인이 추정한 2026년 추정순이익을 현재가치로 환산한 주당 순이익(891원)과 글로벌 로봇 1위
          기업인 일본 화낙의 PER(28.5배)을 적용한 적정 주가 밴드 16,250원 ~ 36,600원 제시
          <br />
          두산로보틱스의 확정 공모가액은 26,000원이며 상장일 주가는 15,600원(상장일 가격제한폭 최저,
          60%) ~ 104,000원(상장일 가격제한폭 최대, 400%) 형성 가능
        </p>

        <table className={style.forceTable}>
          <tr>
            <th colSpan={3} rowSpan={3} className={style.forceTh}>
              적정주가 산출
            </th>
            <th colSpan={3} className={style.forceTh}>
              PER
            </th>
          </tr>
          <tr>
            <td className={style.tbodyTdColor}>20% 할인</td>
            <td className={style.tbodyTdColor}>적용 PER</td>
            <td className={style.tbodyTdColor}>20% 할증</td>
          </tr>
          <tr>
            <td className={style.tbodyTd}>22.8</td>
            <td className={style.tbodyTd}>28.5</td>
            <td className={style.tbodyTd}>34.2</td>
          </tr>
          <tr>
            <td rowSpan={3} className={style.tbodyTdColor}>
              EPS
            </td>
            <td className={style.tbodyTdColor}>20% 할인</td>
            <td className={style.tbodyTdColor}>713</td>
            <td className={style.tbodyTdColor}>16,252</td>
            <td className={style.tbodyTdColor}>20,315</td>
            <td className={style.tbodyTdColor}>24,378</td>
          </tr>
          <tr>
            <td className={style.tbodyTd}>적용 EPS</td>
            <td className={style.tbodyTd}>891</td>
            <td className={style.tbodyTd}>20,315</td>
            <td className={style.tbodyTd}>25,394</td>
            <td className={style.tbodyTd}>30,472</td>
          </tr>
          <tr>
            <td className={style.tbodyTdColor}>20% 할증</td>
            <td className={style.tbodyTdColor}>1,069</td>
            <td className={style.tbodyTdColor}>24,378</td>
            <td className={style.tbodyTdColor}>30,472</td>
            <td className={style.tbodyTdColor}>36,567</td>
          </tr>
        </table>
      </div>
    </>
  )
}
