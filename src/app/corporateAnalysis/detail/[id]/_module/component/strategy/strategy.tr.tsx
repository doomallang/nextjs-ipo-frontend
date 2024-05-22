import style from '../../css/strategy/strategy.module.css'

export default function StrategyTr({
  thTitle,
  tdTitle = '',
  tdDesc = '',
}: {
  thTitle: string
  tdTitle?: string
  tdDesc?: string
}) {
  return (
    <tr className={style.descTr}>
      <th className={style.titleTh}>{thTitle}</th>
      <td className={style.titleTd}>{tdTitle}</td>
      <td className={style.descTd}>{tdDesc}</td>
    </tr>
  )
}
