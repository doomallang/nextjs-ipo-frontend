import style from '../../css/strategy/strategy.module.css'

export default function StrategyCompanyTr() {
  const company = [
    {
      imgSrc: '/images/ipo/ico_test1.png',
      name: '키움증권',
    },
    {
      imgSrc: '/images/ipo/ico_test2.png',
      name: 'KB증권',
    },
    {
      imgSrc: '/images/ipo/ico_test3.png',
      name: '한국투자증권',
    },
    {
      imgSrc: '/images/ipo/ico_test4.png',
      name: '미래에셋증권',
    },
    {
      imgSrc: '/images/ipo/ico_test5.png',
      name: 'NH투자증권',
    },
    {
      imgSrc: '/images/ipo/ico_test6.png',
      name: '크레디트스위스증권',
    },
  ]

  return (
    <tr className={style.descTr}>
      <th className={style.titleTh}>주간사</th>
      <td colSpan={2} className={style.descTd}>
        <ul className={style.descUl}>
          {company.map((item, index) => (
            <li className={style.descLi} key={index}>
              <button className={style.descButton}>
                <span className={style.descIcon}>
                  <img src={item.imgSrc} className={style.descImage} />
                </span>
                <span className={style.descImageText}>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  )
}
