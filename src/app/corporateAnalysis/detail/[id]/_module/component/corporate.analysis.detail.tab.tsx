import style from '../css/tab.module.css'
import { corporateDetailTab } from '@/constants/Menu'

export default function CorporateAnalysisDetailTab({
  tab,
  setTab,
}: {
  tab: string
  setTab: Function
}) {
  function tabChange(tabName: string) {
    setTab(tabName)
  }

  return (
    <div className={style.tabContainer}>
      <ul className={style.tabUl}>
        {corporateDetailTab.map((item, index) => (
          <li className={style.tabLi} key={index}>
            <button
              className={item.key === tab ? style.tabButtonActive : style.tabButton}
              onClick={() => tabChange(item.key)}
            >
              <span className={style.tabText}>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
