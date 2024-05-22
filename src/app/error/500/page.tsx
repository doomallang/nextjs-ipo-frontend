import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const Error500Body = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Error500() {
  return <Error500Body />
}
