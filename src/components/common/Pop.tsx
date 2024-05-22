import style from './_module/css/common.pop.module.css'

export default function CommonPop() {
  return (
    <div className={style.container}>
      <div className={style.popOutContainer}></div>
      <div className={style.popContainer}>
        <div className={style.contentContainer}>
          <span className={style.imageContainer}>
            <img src={'/images/common/ico_notice.png'} className={style.image} />
          </span>
          <div className={style.title}>
            서비스 이용에
            <br />
            불편을 드려 죄송합니다.
          </div>
          <p className={style.desc}>
            서비스 연결이 원활하지 않으니
            <br />
            잠시 후 다시 시도해 주세요.
          </p>
        </div>
        <div className={style.buttonContainer}>
          <div className={style.buttonWrap}>
            <button className={style.button}>
              <span className={style.buttonText}>확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
