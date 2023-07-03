import React from 'react'
import Error from './index'

describe('<Error />', () => {


  it('renders', () => {
    cy.mount(<Error />)
  })

  it('renders the error message correctly', () => {
    cy.mount(
      <Error />
    );

    cy.get('div.flex.items-center.justify-center.h-screen').should('exist');
    cy.get('div.flex.items-center.justify-center.p-8.bg-red-500.rounded-lg.shadow-lg').should('exist');
    cy.get('div.flex.items-center.justify-center.p-8.bg-red-500.rounded-lg.shadow-lg')
      .find('span[role="img"][aria-label="Error"]').should('exist');
    cy.get('div.flex.items-center.justify-center.p-8.bg-red-500.rounded-lg.shadow-lg')
      .find('div.text-white.text-lg.font-semibold').should('have.text', 'Oops! Bir hata oluştu.');
  });

})
