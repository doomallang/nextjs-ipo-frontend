import { ReactChildren } from '@/interfaces/interface.common'

import style from './_module/css/contents.module.css'
export default function Contents({ children }: ReactChildren) {
  return <div className={style.contentsContainer}>{children}</div>
}
