import React from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

function App () {
  return (
    <Provider store={getStore()}>
      <ThemeProviderWrapper>
        <Router />
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App
