import React from 'react'
import DashboardHeader from './index'
import StoreProvider from '@/stores/store-provider'



beforeEach(() => {
  cy.mount(
    <StoreProvider>
      <DashboardHeader />
    </StoreProvider>
  )
})


describe('<DashboardHeader />', () => {
  it('renders the components correctly', () => {
    cy.get('button').should('exist');
    cy.get('svg').should('exist');
  });
  it('click the button', () => {
    cy.get('button').click();
  });

});