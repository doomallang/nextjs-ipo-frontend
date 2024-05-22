import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const NoticeBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Notice() {
  return <NoticeBody />
}
