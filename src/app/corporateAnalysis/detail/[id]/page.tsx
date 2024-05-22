import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const CorporateAnalysisDetailBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function CorporateAnalysisDetail() {
  return <CorporateAnalysisDetailBody />
}
