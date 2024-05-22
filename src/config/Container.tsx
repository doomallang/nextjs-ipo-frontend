import { ReactChildren } from '@/interfaces/interface.common'

import style from './_module/css/container.module.css'
import Top from '@/components/common/Top'
import Contents from '@/components/common/Contents'

export default function Container({ children }: ReactChildren) {
  return (
    <div className={style.container}>
      <Top />
      <Contents>{children}</Contents>
    </div>
  )
}
