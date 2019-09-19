import React from 'react'
import Header from '@/components/blocks/global/Header'
import Footer from '@/components/blocks/global/Footer'
import App from './styles'

const StandardLayout = ({ children }) => (
  <App>
      <Header />
      <main>{children}</main>
      <Footer />
  </App>
)

export default StandardLayout