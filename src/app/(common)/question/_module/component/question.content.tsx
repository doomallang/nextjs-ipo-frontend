import style from '../css/content.module.css'
import QuestionContentItem from '@/app/(common)/question/_module/component/question.content.item'

export default function QuestionContent() {
  return (
    <div className={style.contentContainer}>
      <div className={style.contentWrap}>
        <div className={style.contentMid}>
          <div className={style.noticeAccordianWrap}>
            <div className={style.noticeList}>
              {[1, 2, 3].map((num) => (
                <QuestionContentItem key={num} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
