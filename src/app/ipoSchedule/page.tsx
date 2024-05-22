import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const IpoScheduleBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function IpoSchedule() {
  return <IpoScheduleBody />
}
