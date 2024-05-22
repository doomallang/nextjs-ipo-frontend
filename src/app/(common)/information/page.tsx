import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const InformationBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Information() {
  return <InformationBody />
}
