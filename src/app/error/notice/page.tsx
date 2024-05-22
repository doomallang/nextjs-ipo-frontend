import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const WorkNoticeBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function WorkNotice() {
  return <WorkNoticeBody />
}
