// Put here basic action-creator functions or basic actions

import { DEMO_ACTION } from '@/constants'

export const demoAction = payload => ({
  payload,
  type: DEMO_ACTION,
})
