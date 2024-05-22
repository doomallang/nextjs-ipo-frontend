import style from '../../css/point/point.force.module.css'

export default function PointForceIndustry() {
  return (
    <>
      <ul>
        <li className={style.pointLi}>
          협동로봇은 직원들과 같은 작업 공간에서 일하도록 설계된 로봇
        </li>
        <li className={style.pointLi}>일반적으로 6축 이상의 관절로 구성된 로봇팔을 의미</li>
        <li className={style.pointLi}>
          협동로봇은 산업용 로봇과 달리 산업용과 비산업용에 모두 사용 가능하며 25kg 미만의 가벼운
          무게가 특징 가벼운 무게로 다양한 산업 및 생활에 안전하게 적용 가능
        </li>
        <li className={style.pointLi}>
          현존하는 협동로봇 중 가장 무거운 중량을 운반할 수 있는 H시리즈(가반하중 20 ~ 25kg)를
          글로벌 최초로 출시하여 가반하중 5 ~ 25kg를 모두 커버하는 라인업 완성
        </li>
        <li className={style.pointLi}>
          주력사업인 협동로봇 외 커피 및 튀김과 같은 솔루션 사업 매출의 신규 발생 기대
        </li>
      </ul>
      <table className={style.forceTable}>
        <colgroup>
          <col style={{ width: '28.125%' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead>
          <tr>
            <th className={style.forceTh}>품목</th>
            <th className={style.forceTh}>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={style.tbodyTh}>M 시리즈</th>
            <td className={style.tbodyTd}>두산로보틱스의 첫 협동로봇</td>
          </tr>
          <tr>
            <th className={style.tbodyTh}>A 시리즈</th>
            <td className={style.tbodyTd}>동사 라인업 중 가장 가반하중이 가벼움</td>
          </tr>
          <tr className={style.forceTr}>
            <th className={style.tbodyTh}>H 시리즈</th>
            <td className={style.tbodyTd}>가장 무거운 중량을 운반할 수 있는 제품</td>
          </tr>
          <tr>
            <th className={style.tbodyTh}>E 시리즈</th>
            <td className={style.tbodyTd}>이동 및 설치 용이, 저렴한 가격이 특징</td>
          </tr>
          <tr>
            <th className={style.tbodyTh}>팔레타이징</th>
            <td className={style.tbodyTd}>이동형으로 자유로운 이동/설치 가능</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
