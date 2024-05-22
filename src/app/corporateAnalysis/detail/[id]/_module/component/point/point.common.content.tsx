import style from '../../css/point/point.common.module.css'
import { ReactNode } from 'react'

export default function PointCommonContent({
  text,
  children,
}: {
  text: string
  children: ReactNode
}) {
  return (
    <div>
      <div className={style.title}>{text}</div>
      <div className={style.descContainer}>
        <div className={style.descWrap}>
          <div className={style.desc}>{children}</div>
        </div>
      </div>
    </div>
  )
}
