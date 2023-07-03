import React from 'react'
import NoData from './index'

describe('<NoData />', () => {
  it('renders the NoData component correctly', () => {
    cy.mount(<NoData />);

    cy.get('div.flex.items-center.justify-center.h-screen')
      .should('exist');
    cy.get('div.flex.items-center.justify-center.h-screen')
      .find('div.flex.flex-col.items-center.p-8.bg-white.rounded-lg.shadow-lg')
      .should('exist');
    cy.get('div.flex.items-center.justify-center.h-screen')
      .find('div.flex.flex-col.items-center.p-8.bg-white.rounded-lg.shadow-lg')
      .should('exist');
    cy.get('div.flex.items-center.justify-center.h-screen')
      .find('div.flex.flex-col.items-center.p-8.bg-white.rounded-lg.shadow-lg')
      .find('path').should('exist');
    cy.get('div.flex.items-center.justify-center.h-screen')
      .find('div.flex.flex-col.items-center.p-8.bg-white.rounded-lg.shadow-lg')
      .should('exist');

  });
})