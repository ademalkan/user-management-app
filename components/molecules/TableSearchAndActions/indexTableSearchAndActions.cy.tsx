import React from 'react';
import TableSearchAndActions, { User } from './index';

describe('<TableSearchAndActions />', () => {
  let searchQuery: string;
  let setSearchQuery: (query: string) => void;
  let handleAddUser: (user: User) => void;

  beforeEach(() => {
    searchQuery = '';
    setSearchQuery = cy.stub().as('setSearchQuery');
    handleAddUser = cy.stub().as('handleAddUser');

    cy.mount(
      <TableSearchAndActions
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleAddUser={handleAddUser}
      />
    );
  });

  it('renders the search input correctly', () => {
    cy.get('input').should('have.value', searchQuery);
  });


  it('calls the handleAddUser handler correctly', () => {
    cy.get('button').contains('ADD NEW USER').should('exist');
    cy.get('button').contains('ADD NEW USER').click();
    cy.get('button').contains('Cancel').should('exist');
    cy.get('button').contains('Cancel').click();
  });
});
