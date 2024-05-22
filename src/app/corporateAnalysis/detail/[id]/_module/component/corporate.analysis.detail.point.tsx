import PointCommonContent from '@/app/corporateAnalysis/detail/[id]/_module/component/point/point.common.content'
import PointOutline from '@/app/corporateAnalysis/detail/[id]/_module/component/point/point.outline'
import PointForceIndustry from '@/app/corporateAnalysis/detail/[id]/_module/component/point/point.force.industry'
import PointForwardIndustry from '@/app/corporateAnalysis/detail/[id]/_module/component/point/point.forward.industry'
import PointFinancialStatus from '@/app/corporateAnalysis/detail/[id]/_module/component/point/point.financial.status'
import PointInvestPoint from '@/app/corporateAnalysis/detail/[id]/_module/component/point/point.invest.point'

export default function CorporateAnalysisDetailPoint() {
  return (
    <>
      <PointCommonContent text={'사업개요'}>
        <PointOutline />
      </PointCommonContent>
      <PointCommonContent text={'주력사업'}>
        <PointForceIndustry />
      </PointCommonContent>
      <PointCommonContent text={'전방산업'}>
        <PointForwardIndustry />
      </PointCommonContent>
      <PointCommonContent text={'재무현황'}>
        <PointFinancialStatus />
      </PointCommonContent>
      <PointCommonContent text={'투자포인트'}>
        <PointInvestPoint />
      </PointCommonContent>
    </>
  )
}
