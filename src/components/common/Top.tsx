import style from './_module/css/top.container.module.css'
import CommonTitle from '@/components/common/_module/component/CommonTitle'
import CommonNav from '@/components/common/_module/component/CommonNav'
import { usePathname } from 'next/navigation'
import { excludeNavPage } from '@/constants/Menu'

export default function Top() {
  const path = usePathname()

  return (
    <div className={style.topContainer}>
      <CommonTitle />
      {excludeNavPage.filter((page) => path.includes(page)).length > 0 ? <></> : <CommonNav />}
    </div>
  )
}
