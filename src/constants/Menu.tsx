import { TitleText } from '@/enums/text'

const topMenu = [
  {
    label: TitleText.HOME,
    key: 'home',
  },
  {
    label: TitleText.IPO_SCHEDULE,
    key: 'ipoSchedule',
  },
  {
    label: TitleText.CORPORATE_ANALYSIS,
    key: 'corporateAnalysis',
  },
]

const excludeNavPage = [
  '/corporateAnalysis/detail',
  '/notice',
  '/question',
  '/information',
  '/error',
  '/join/intro',
]

const corporateDetailTab = [
  {
    label: TitleText.INVESTMENT_STRATEGY,
    key: 'strategy',
  },
  {
    label: TitleText.INVESTMENT_POINT,
    key: 'point',
  },
  {
    label: TitleText.INVESTMENT_OPINION,
    key: 'opinion',
  },
]
export { topMenu, excludeNavPage, corporateDetailTab }
