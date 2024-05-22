import style from './_module/css/body.module.css'
import QuestionTitle from '@/app/(common)/question/_module/component/question.title'
import QuestionContent from '@/app/(common)/question/_module/component/question.content'

export default function QuestionBody() {
  return (
    <div className={style.bodyContainer}>
      <QuestionTitle />
      <QuestionContent />
    </div>
  )
}
