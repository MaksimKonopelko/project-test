import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'

import { LANDING_PAGE_PATH } from '@/constants'

const LandingPage = React.lazy(() => import('@/components/pages/Landing'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Route exact path={LANDING_PAGE_PATH} component={LandingPage} />
    </React.Suspense>
  </Router>
)
