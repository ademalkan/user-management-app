import React from 'react'
import DashboardItems from './index'

describe('<DashboardItems />', () => {


  it('renders the components correctly', () => {
    cy.mount(<DashboardItems />);
    cy.get('div').should('have.length', 7); 
  });


})
