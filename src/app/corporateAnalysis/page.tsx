import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const CorporateAnalysisBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function CorporateAnalysis() {
  return <CorporateAnalysisBody />
}
