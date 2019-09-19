import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme'

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default ThemeProviderWrapper