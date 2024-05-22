'use client'

import { useParams } from 'next/navigation'
import CorporateAnalysisDetailTitle from '@/app/corporateAnalysis/detail/[id]/_module/component/corporate.analysis.detail.title'

import style from './_module/css/body.module.css'
import CorporateAnalysisDetailContent from '@/app/corporateAnalysis/detail/[id]/_module/component/corporate.analysis.detail.content'

export default function CorporateAnalysisDetailBody() {
  const { id } = useParams()

  return (
    <div className={style.bodyContainer}>
      <CorporateAnalysisDetailTitle />
      <CorporateAnalysisDetailContent />
    </div>
  )
}
