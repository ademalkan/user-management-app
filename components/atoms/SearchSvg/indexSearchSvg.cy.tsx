import React from 'react'
import SearchSvg from './index'

describe('<SearchSvg />', () => {
  it('render with type', () => {
    cy.mount(<SearchSvg />)
    cy.get('svg')
  })
})