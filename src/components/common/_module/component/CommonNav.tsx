'use client'

import style from '../css/common.nav.module.css'
import { topMenu } from '@/constants/Menu'
import useMenuStore from '@/stores/store.menu'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import useLink from '@/hooks/useLink'

export default function CommonNav() {
  const { menu, setMenu } = useMenuStore()
  const path = usePathname()
  const { onLink } = useLink()

  useEffect(() => {
    setMenu(path.split('/')[1])
  }, [])

  return (
    <div>
      <nav>
        <ul className={style.navUl}>
          {topMenu.map((item) => (
            <li key={item.key}>
              <button
                className={menu === item.key ? style.navButtonActive : style.navButton}
                onClick={() => onLink(`/${item.key}`)}
              >
                <span className={style.navSpan}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
