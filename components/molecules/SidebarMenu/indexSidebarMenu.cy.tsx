import React from 'react'
import SidebarMenu from './index'
import { menuItems } from '@/mocks/menuMocks';

describe('<SidebarMenu />', () => {
  it('renders the SidebarMenu component correctly', () => {
    cy.mount(<SidebarMenu menuItems={menuItems} />);
    cy.get('div').should('have.length', menuItems.length + 2);
  });

})