import React from 'react'
import CustomHr from './index'

describe('<CustomHr />', () => {
  it('render with type', () => {
    cy.mount(<CustomHr />)
    cy.get('div')
  })
})