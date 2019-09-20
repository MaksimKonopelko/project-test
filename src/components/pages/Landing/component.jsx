import React from 'react'
import StandardLayout from '@/components/layouts/Standard'
import Landing from './styles'
import Container from './Container/index'
import FiltersContainer from './FiltersContainer'

const LandingPage = () => (
  <StandardLayout>
    <Landing>  
        <FiltersContainer />
        <Container/>   
    </Landing>
  </StandardLayout>
)

export default LandingPage