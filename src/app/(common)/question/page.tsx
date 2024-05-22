import dynamic from 'next/dynamic'
import Loading from '@/components/common/Loading'

const QuestionBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Question() {
  return <QuestionBody />
}
