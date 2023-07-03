import React from 'react'
import EditSvg from './index'

describe('<EditSvg />', () => {
  it('render with type', () => {
    cy.mount(<EditSvg />)
    cy.get('svg')
  })
})