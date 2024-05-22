import style from './_module/css/body.module.css'
import NoticeTitle from '@/app/(common)/notice/_module/component/notice.title'
import NoticeContent from '@/app/(common)/notice/_module/component/notice.content'

export default function NoticeBody() {
  return (
    <div className={style.bodyContainer}>
      <NoticeTitle />
      <NoticeContent />
    </div>
  )
}
