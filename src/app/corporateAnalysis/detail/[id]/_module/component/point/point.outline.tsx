import style from '../../css/point/point.outline.module.css'

export default function PointOutline() {
  return (
    <>
      <ul>
        <li className={style.pointLi}>협동로봇 제조 및 솔루션 전문 기업</li>
        <li className={style.pointLi}>기계 및 장비 전문 기업인 두산의 계열회사</li>
        <li className={style.pointLi}>협동로봇 시장에서 국내 1위 및 글로벌 4위 차지</li>
      </ul>
      <div>
        <img src={'/images/ipo/sam_graph_test01.png'} className={style.pointImage} />
      </div>
    </>
  )
}
