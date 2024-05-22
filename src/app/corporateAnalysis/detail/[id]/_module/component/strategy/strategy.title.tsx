import style from '../../css/strategy/strategy.module.css'

export default function StrategyTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className={style.title}>{title}</div>
      <div className={style.descContainer}>
        <div className={style.descWrap}>
          <div className={style.desc} dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
    </div>
  )
}
