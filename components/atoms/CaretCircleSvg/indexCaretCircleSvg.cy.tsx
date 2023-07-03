import React from 'react'
import CaretCircleSvg from './index'

describe('<CaretCircleSvg />', () => {
  it('render with type', () => {
    cy.mount(<CaretCircleSvg />)
    cy.get('svg')
  })
})