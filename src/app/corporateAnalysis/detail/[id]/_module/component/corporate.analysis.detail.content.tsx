'use client'

import CorporateAnalysisDetailTab from '@/app/corporateAnalysis/detail/[id]/_module/component/corporate.analysis.detail.tab'

import style from '../css/content.module.css'
import CorporateAnalysisDetailStrategy from '@/app/corporateAnalysis/detail/[id]/_module/component/corporate.analysis.detail.strategy'
import { useState } from 'react'
import CorporateAnalysisDetailPoint from '@/app/corporateAnalysis/detail/[id]/_module/component/corporate.analysis.detail.point'
import CorporateAnalysisDetailOpinion from '@/app/corporateAnalysis/detail/[id]/_module/component/corporate.analysis.detail.opinion'

export default function CorporateAnalysisDetailContent() {
  const [tab, setTab] = useState('strategy')

  return (
    <div className={style.contentContainer}>
      <CorporateAnalysisDetailTab tab={tab} setTab={setTab} />
      {tab === 'strategy' ? (
        <CorporateAnalysisDetailStrategy />
      ) : tab === 'point' ? (
        <CorporateAnalysisDetailPoint />
      ) : tab === 'opinion' ? (
        <CorporateAnalysisDetailOpinion />
      ) : (
        <></>
      )}
    </div>
  )
}
