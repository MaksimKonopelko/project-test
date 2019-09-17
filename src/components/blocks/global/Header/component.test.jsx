import React from 'react'
import { render } from '@testing-library/react'
import { generateImage } from 'jsdom-screenshot'
import 'jest-styled-components'

import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

import Header from './component'

it('Headers has no visual regressions', async () => {
  render(
    <ThemeProviderWrapper>
      <Header />
    </ThemeProviderWrapper>
  )

  const screenshot = await generateImage()
  expect(screenshot).toMatchImageSnapshot()
})
