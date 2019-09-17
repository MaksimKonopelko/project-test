import React from 'react'
// import pt from 'prop-types'

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

// StandardLayout.propTypes = {
//   children: pt.oneOfType([
//     pt.string.isRequired,
//     pt.element.isRequired,
//   ]),
// }

export default StandardLayout