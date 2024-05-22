import style from '../css/contents.title.module.css'

export default function ContentsTitle({ text }: { text: string }) {
  return <div className={style.title}>{text}</div>
}
