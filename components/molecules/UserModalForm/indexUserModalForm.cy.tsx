import React from 'react';
import UserModalForm from './index';

describe('<UserModalForm />', () => {
  let show = true;

  const modalToggleHandler = () => {
    return show = !show;
  }
  const changeHandler = () => {
    return true;
  }
  const actionTypeCreate = true;
  const onClose = modalToggleHandler;
  const onSubmit = modalToggleHandler;
  const onInputChange = changeHandler;
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '123456789',
    domain: 'example.com',
    companyName:'ABC Company',
    company: {
      name: 'ABC Company'
    },
    email: 'john@example.com',
  };

  beforeEach(() => {
    cy.mount(
      <UserModalForm
        show={show}
        actionTypeCreate={actionTypeCreate}
        onClose={onClose}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        user={user}
      />
    );
  });

  it('renders the modal form correctly', () => {
    cy.get('.fixed').should('exist');
    cy.get('h2').should('have.text', 'Add New User');
    cy.get('input[name="firstName"]').should('have.value', user.firstName);
    cy.get('input[name="lastName"]').should('have.value', user.lastName);
    cy.get('input[name="phone"]').should('have.value', user.phone);
    cy.get('input[name="domain"]').should('have.value', user.domain);
    cy.get('input[name="companyName"]').should('have.value', user.company.name);
    cy.get('input[name="email"]').should('have.value', user.email);
    cy.contains('Add New User').should('exist');
    cy.contains('Cancel').should('exist');
  });

  it('calls the onClose handler correctly', () => {
    cy.get('button').contains('Cancel').click();
  });


});
