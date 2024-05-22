import style from './_module/css/body.module.css'
import CorporateAnalysisContents from '@/app/corporateAnalysis/_module/component/corporate.analysis.contents'

export default function CorporateAnalysisBody() {
  return (
    <div className={style.bodyContainer}>
      <CorporateAnalysisContents />
    </div>
  )
}
