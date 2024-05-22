import style from './css/list.item.module.css'

export default function IpoScheduleListItem() {
  return (
    <div className={style.ipoList}>
      <div className={style.ipoItem}>
        <div>
          <span className={style.ipoSpan}>
            <img className={style.ipoImage} src={'/images/ipo/img_millie.png'} />
          </span>
        </div>
        <div className={style.textContainer}>
          <div>
            <div className={style.ipoName}>
              <span className={style.ipoText}>밀리의 서재</span>
              <span className={style.ipoImageSpan}>
                <img className={style.ipoStateImage} src={'/images/ipo/ico_listed.png'} />
              </span>
            </div>
            <div className={style.ipoDescContainer}>
              <dl className={style.ipoDl}>
                <dt className={style.descTitle}>시초가</dt>
                <dt className={style.descContents}>41,100원</dt>
              </dl>
              <dl className={style.ipoDl}>
                <dt className={style.descTitle}>상장일</dt>
                <dt className={style.descContents}>2024.06.01</dt>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
