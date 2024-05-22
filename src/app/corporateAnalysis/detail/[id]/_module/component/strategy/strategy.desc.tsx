import StrategyTr from '@/app/corporateAnalysis/detail/[id]/_module/component/strategy/strategy.tr'
import StrategyCompanyTr from '@/app/corporateAnalysis/detail/[id]/_module/component/strategy/strategy.company.tr'

import style from '../../css/strategy/strategy.module.css'

export default function StrategyDesc() {
  return (
    <div>
      <div className={style.title}>공모개요</div>
      <div className={style.descContainer}>
        <div className={style.descWrap}>
          <table className={style.descTable}>
            <colgroup>
              <col></col>
              <col></col>
              <col></col>
            </colgroup>
            <tbody>
              <StrategyTr thTitle={'시작'} tdTitle={'코스피'} tdDesc={'(신규상장)'} />
              <StrategyTr thTitle={'종목코드'} tdTitle={'454921'} />
              <StrategyTr thTitle={'업종'} tdTitle={'기계'} />
              <StrategyTr thTitle={'주요사업(제품)'} tdTitle={'로봇'} />
              <StrategyTr thTitle={'공모가'} tdTitle={'26,000원'} tdDesc={'(21,000~26,000원)'} />
              <StrategyTr thTitle={'시가총액'} tdTitle={'10,000원'} tdDesc={'(공모가 기준)'} />
              <StrategyTr
                thTitle={'수요예측'}
                tdTitle={'272:10'}
                tdDesc={'(최근 공모기업 평균 706:1)'}
              />
              <StrategyCompanyTr />
              <StrategyTr thTitle={'계좌준비기한'} tdTitle={'2024.09.19'} />
              <StrategyTr thTitle={'일반청약'} tdTitle={'2024.09.21~22'} />
              <StrategyTr
                thTitle={'최소 청약증거금'}
                tdTitle={'26만원'}
                tdDesc={'(키움증권 기준)'}
              />
              <StrategyTr
                thTitle={'일반청약 경쟁률'}
                tdTitle={'463:10'}
                tdDesc={'(키움증권 기준)'}
              />
              <StrategyTr thTitle={'주식배정/환불'} tdTitle={'2024.09.26'} />
              <StrategyTr thTitle={'상장일'} tdTitle={'2024.09.26'} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
