import OpinionCommonContent from '@/app/corporateAnalysis/detail/[id]/_module/component/opinion/opinion.common.content'
import OpinionDemandForecast from '@/app/corporateAnalysis/detail/[id]/_module/component/opinion/opinion.demand.forecast'
import OpinionSameCompany from '@/app/corporateAnalysis/detail/[id]/_module/component/opinion/opinion.same.company'
import OpinionInvestOpinion from '@/app/corporateAnalysis/detail/[id]/_module/component/opinion/opinion.invest.opinion'

export default function CorporateAnalysisDetailOpinion() {
  return (
    <>
      <OpinionCommonContent text={'수요예측분석'}>
        <OpinionDemandForecast />
      </OpinionCommonContent>
      <OpinionCommonContent text={'동종기업분석'}>
        <OpinionSameCompany />
      </OpinionCommonContent>
      <OpinionCommonContent text={'투자의견 및 적정주가'}>
        <OpinionInvestOpinion />
      </OpinionCommonContent>
    </>
  )
}
