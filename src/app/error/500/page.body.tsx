'use client'

import useLink from '@/hooks/useLink'

import style from './_module/css/body.module.css'

export default function Error500Body() {
  const { onBack } = useLink()

  return (
    <div className={style.bodyContainer}>
      <div className={style.bodyWrap}>
        <div className={style.contentContainer}>
          <div className={style.errorContainer}>
            <div className={style.imageContainer}>
              <img src={'/images/common/ico_notice.png'} className={style.image} />
            </div>
            <div className={style.titleContainer}>
              서비스 이용에
              <br />
              불편을 드려 죄송합니다.
            </div>
            <p className={style.pContainer}>
              서비스 연결이 원활하지 않으니
              <br />
              잠시 후 다시 시도해 주세요.
            </p>
            <button className={style.button} onClick={onBack}>
              <span className={style.buttonText}>뒤로가기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
