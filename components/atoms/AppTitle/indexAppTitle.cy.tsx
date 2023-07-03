import React from 'react'
import AppTitle from './index'

beforeEach(() => {
  cy.mount(<AppTitle />)
})

describe('<AppTitle />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppTitle />)
  })

  it('renders with default props', () => {
    cy.get('h1').should('have.class', 'font-bold')
    cy.get('.w-1').should('have.class', 'bg-open-yellow')
    cy.get('h1').contains('MANAGE COURSES')
  })

  it('renders with custom props', () => {
    cy.get('h1')
      .should('have.class', 'font-bold')
    cy.get('.w-1')
      .should('have.class', 'bg-open-yellow')
    cy.get('h1').contains('MANAGE COURSES')
  })

})