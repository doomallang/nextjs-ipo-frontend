import StrategyDesc from '@/app/corporateAnalysis/detail/[id]/_module/component/strategy/strategy.desc'
import StrategyTitle from '@/app/corporateAnalysis/detail/[id]/_module/component/strategy/strategy.title'

import style from '../css/strategy/strategy.module.css'

export default function CorporateAnalysisDetailStrategy() {
  return (
    <div className={style.strategyContainer}>
      <StrategyTitle
        title={'투자전략'}
        desc={
          '일부는 시초가 매도, 일부는 단기 보유<br/>(동종기업 비교 시 적정주가 16,250원 ~ 36,600원 예상)'
        }
      />
      <StrategyDesc />
    </div>
  )
}
