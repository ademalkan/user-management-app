import React from 'react'
import LogoutSvg from './index'

describe('<LogoutSvg />', () => {
  it('render with type', () => {
    cy.mount(<LogoutSvg />)
    cy.get('svg')
  })
})