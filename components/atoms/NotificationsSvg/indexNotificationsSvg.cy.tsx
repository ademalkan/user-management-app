import React from 'react'
import NotificationsSvg from './index'

describe('<NotificationsSvg />', () => {
  it('render with type', () => {
    cy.mount(<NotificationsSvg />)
    cy.get('svg')
  })
})