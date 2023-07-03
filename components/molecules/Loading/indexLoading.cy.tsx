import React from 'react'
import Loading from './index'

describe('<Loading />', () => {
  it('renders the loading animation correctly', () => {
    cy.mount(
      <Loading />
    );

    cy.get('div.flex.items-center.justify-center.h-screen').should('exist');
    cy.get('div.flex.items-center.justify-center.h-screen')
      .find('div.w-16.h-16.rounded-full.border-t-4.border-dark-yellow').should('exist');
  });


})