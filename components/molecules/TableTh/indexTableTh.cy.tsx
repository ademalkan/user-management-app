import React from 'react';
import TableTh from './index';
import { tableItems } from '@/mocks/tableMocks';

describe('<TableTh />', () => {
  beforeEach(() => {
    cy.mount(<table><thead><tr><TableTh /></tr></thead></table>);
  });

  it('renders table header columns correctly', () => {
    cy.get('th').should('have.length', tableItems.length);
    tableItems.forEach((item, index) => {
      cy.get('th').eq(index).should('have.text', item.name);
    });
  });
});
