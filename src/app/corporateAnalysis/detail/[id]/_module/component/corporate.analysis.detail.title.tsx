import style from '../css/title.module.css'

export default function CorporateAnalysisDetailTitle() {
  return (
    <div className={style.titleContainer}>
      <div className={style.imageContainer}>
        <span className={style.imageSpan}>
          <img className={style.titleImage} src={'/images/ipo/img_doosan.png'} />
        </span>
      </div>
      <div className={style.textContainer}>
        <div className={style.titleText}>두산로보틱스</div>
        <span className={style.codeText}>(454921)</span>
      </div>
    </div>
  )
}
