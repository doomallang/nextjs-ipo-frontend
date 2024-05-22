import style from '../css/item.module.css'

export default function IpoScheduleItem({ data }: { data: any[] }) {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div className={style.ipoList} key={index}>
            <div className={style.ipoItem}>
              <div>
                <span className={style.ipoSpan}>
                  <img className={style.ipoImage} src={item.img} />
                </span>
              </div>
              <div className={style.textContainer}>
                <div>
                  <div className={style.ipoName}>
                    <span className={style.ipoText}>{item.name}</span>
                    <span className={style.ipoImageSpan}>
                      <img className={style.ipoStateImage} src={'/images/ipo/ico_listed.png'} />
                    </span>
                  </div>
                  <div className={style.ipoDescContainer}>
                    <dl className={style.ipoDl}>
                      <dt className={style.descTitle}>시초가</dt>
                      <dt className={style.descContents}>{item.prevPrice}</dt>
                    </dl>
                    <dl className={style.ipoDl}>
                      <dt className={style.descTitle}>시초가</dt>
                      <dt className={style.descContents}>{item.nextPrice}</dt>
                    </dl>
                    <dl className={style.ipoDl}>
                      <dt className={style.descTitle}>상장일</dt>
                      <dt className={style.descContents}>{item.date}</dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
