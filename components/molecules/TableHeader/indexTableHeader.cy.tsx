import React from 'react'
import TableHeader from './index'
import { User } from '../TableSearchAndActions';



describe('<TableHeader />', () => {
  let searchQuery: string;
  let setSearchQuery: (query: string) => void;
  let handleAddUser: (user: User) => void;

  beforeEach(() => {
    searchQuery = '';
    setSearchQuery = cy.stub().as('setSearchQuery');
    handleAddUser = cy.stub().as('handleAddUser');

    cy.mount(
      <table>
        <tbody>
          <TableHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleAddUser={handleAddUser}
          />
        </tbody>
      </table>
    );
  });

  it('renders the table title correctly', () => {
    cy.contains('Students List').should('exist');
  });

  it('renders the search input and actions correctly', () => {
    cy.get('input').should('have.value', searchQuery);
    cy.get('button').contains('ADD NEW USER').should('exist');
    cy.get('button').contains('ADD NEW USER').click();
    cy.get('button').contains('Cancel').should('exist');
    cy.get('button').contains('Cancel').click();

  });
 
});
