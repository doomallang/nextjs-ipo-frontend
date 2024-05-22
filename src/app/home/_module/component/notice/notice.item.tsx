import style from '@/app/home/_module/css/notice.module.css'

export default function HomeNoticeItem({ text, imgSrc }: { text: string; imgSrc: string }) {
  return (
    <div className={style.noticeDiv}>
      <button className={style.noticeButton}>
        <span className={style.noticeIconSpan}>
          <img className={style.noticeIconImage} src={imgSrc} />
        </span>
        <span className={style.noticeText}>{text}</span>
      </button>
    </div>
  )
}
