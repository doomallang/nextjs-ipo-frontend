import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const HomeBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Home() {
  return <HomeBody />
}
