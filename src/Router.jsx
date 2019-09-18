import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from '@/components/blocks/global/Loader'
import { LANDING_PAGE_PATH, LANDING_PAGE_PATH_BRANDS, LANDING_PAGE_PATH_DESIGNERS, LANDING_PAGE_PATH_ABOUT_US, LANDING_PAGE_PATH_CONTACT } from '@/constants'

const LandingPage = React.lazy(() => import('@/components/pages/Landing'))
const Brands = React.lazy(() => import('@/components/pages/Brands'))
const About = React.lazy(() => import('@/components/pages/About'))
const Contact = React.lazy(() => import('@/components/pages/Brands'))
const Designers = React.lazy(() => import('@/components/pages/Brands'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader/>}>
      <Switch>
        <Route exact path={LANDING_PAGE_PATH} component={LandingPage} />
        <Route path={LANDING_PAGE_PATH_BRANDS} component={Brands} />
        <Route path={LANDING_PAGE_PATH_DESIGNERS} component={Designers} />
        <Route path={LANDING_PAGE_PATH_ABOUT_US} component={About} />
        <Route path={LANDING_PAGE_PATH_CONTACT} component={Contact} />
      </Switch>
    </React.Suspense>
  </Router>
)