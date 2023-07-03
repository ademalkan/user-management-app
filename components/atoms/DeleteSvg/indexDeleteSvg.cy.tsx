import React from 'react'
import DeleteSvg from './index'

describe('<DeleteSvg />', () => {
  it('render with type', () => {
    cy.mount(<DeleteSvg />)
    cy.get('svg')
  })
})