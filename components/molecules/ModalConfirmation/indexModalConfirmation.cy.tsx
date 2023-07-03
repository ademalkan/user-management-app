import React from 'react'
import ModalConfirmation from './index'

describe('<ModalConfirmation />', () => {
  it('renders the modal confirmation correctly', () => {
    const confirmAction = cy.stub().as('confirmAction');
    const cancelAction = cy.stub().as('cancelAction');
    const title = 'Confirmation';

    cy.mount(
      <ModalConfirmation
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        title={title}
      />
    );

    cy.get('div.fixed.inset-0.bg-white-grey.flex.items-center.justify-center').should('exist');
    cy.get('div.fixed.inset-0.bg-white-grey.flex.items-center.justify-center')
      .find('div.bg-smoke-white.p-5.rounded-lg').should('exist');
    cy.get('div.fixed.inset-0.bg-white-grey.flex.items-center.justify-center')
      .find('div.bg-smoke-white.p-5.rounded-lg')
      .find('p').should('have.text', title);
    cy.get('div.fixed.inset-0.bg-white-grey.flex.items-center.justify-center')
      .find('div.bg-smoke-white.p-5.rounded-lg')
      .find('button').should('have.length', 2);
  });

  it('calls the confirmAction when Confirm button is clicked', () => {
    const confirmAction = cy.stub().as('confirmAction');
    const cancelAction = cy.stub().as('cancelAction');
    const title = 'Confirmation';

    cy.mount(
      <ModalConfirmation
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        title={title}
      />
    );

    cy.get('div.fixed.inset-0.bg-white-grey.flex.items-center.justify-center')
      .find('div.bg-smoke-white.p-5.rounded-lg')
      .find('button.mr-4').click();

    cy.get('@confirmAction').should('be.called');
    cy.get('@cancelAction').should('not.be.called');
  });

  it('calls the cancelAction when Cancel button is clicked', () => {
    const confirmAction = cy.stub().as('confirmAction');
    const cancelAction = cy.stub().as('cancelAction');
    const title = 'Confirmation';

    cy.mount(
      <ModalConfirmation
        confirmAction={confirmAction}
        cancelAction={cancelAction}
        title={title}
      />
    );

    cy.get('div.fixed.inset-0.bg-white-grey.flex.items-center.justify-center')
      .find('div.bg-smoke-white.p-5.rounded-lg')
      .find('button.border.border-dark-yellow').click();

    cy.get('@confirmAction').should('not.be.called');
    cy.get('@cancelAction').should('be.called');
  });
})