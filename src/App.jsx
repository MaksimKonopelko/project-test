import React from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

function App () {

  //console.log(this.store.getStore);

  return (
    <Provider store={getStore()}>
      <ThemeProviderWrapper>
        <Router />
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App