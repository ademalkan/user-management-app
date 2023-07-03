import React from 'react'
import ButtonAtom from './index'

describe('ButtonAtom component', () => {
  beforeEach(() => {
    cy.mount(<ButtonAtom>Click me</ButtonAtom>)
  })

  it('renders with children', () => {
    cy.get('button').should('have.class', 'w-full')
    cy.get('button').should('have.class', 'transition-colors')
    cy.get('button').should('have.class', 'bg-dark-yellow')
    cy.get('button').should('have.class', 'hover:bg-open-yellow')
    cy.get('button').should('have.class', 'text-smoke-white')
    cy.get('button').should('have.class', 'text-sm')
    cy.get('button').should('have.class', 'py-2')
    cy.get('button').should('have.class', 'px-4')
    cy.get('button').should('have.class', 'rounded')
    cy.get('button').should('have.class', 'focus:outline-none')
    cy.get('button').should('have.attr', 'type', 'button')
    cy.get('button').contains('Click me')
  })

  it('calls onClick prop when clicked', () => {
    const onClickStub = cy.stub().as('onClick')
    cy.mount(<ButtonAtom onClick={onClickStub}>Click me</ButtonAtom>)
    cy.get('button').click().then(() => {
      expect(onClickStub).to.be.calledOnce
    })
  })
})
