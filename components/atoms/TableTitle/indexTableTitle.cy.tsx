import React from 'react';
import TableTitle from './index';

describe('<TableTitle />', () => {
  it('renders the title correctly', () => {
    const title = 'Sample Table';

    cy.mount(<TableTitle title={title} />);

    cy.contains('h1', title).should('exist');
  });

  it('displays the title with the correct styling', () => {
    const title = 'Sample Table';

    cy.mount(<TableTitle title={title} />);

    cy.get('h1')
      .should('have.text', title)
      .should('have.class', 'text-2xl')
      .should('have.class', 'font-bold')
      .should('have.class', 'mb-2');
  });
});
