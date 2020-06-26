import React from 'react'
import { setFlowPromiseStubByName } from '../../__mocks__/flows'
import { flowsStubs } from '../../__mocks__/flowsStubs'
import App from '../App'
import { render } from '../common/test-utils/renderWithProvider'
import { FlowNames } from '../flows'

describe('App', () => {
  beforeAll(() => {
    setFlowPromiseStubByName(FlowNames.HANDSHAKE)(flowsStubs.handshake.success)
    setFlowPromiseStubByName(FlowNames.GET_BOXES)(flowsStubs.getBoxes.fullResponse)
  })
  test('Renders application', () => {
    render(<App />)
  })
})
