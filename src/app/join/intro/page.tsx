import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const JoinIntroBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function JoinIntro() {
  return <JoinIntroBody />
}
