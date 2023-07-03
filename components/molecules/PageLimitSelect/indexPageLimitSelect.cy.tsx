import React from 'react'
import PageLimitSelect from './index'

describe('<PageLimitSelect />', () => {
  const options = [10, 20, 50];
  let selectedOption = 20;
  let onChange;

  beforeEach(() => {
    onChange = cy.stub().as('onChange');
    cy.mount(<PageLimitSelect options={options} selectedOption={selectedOption} onChange={onChange} />);
  });

  it('renders the PageLimitSelect component correctly', () => {
    cy.get('div.text-open-muted.font-normal.text-sm').should('exist');
    cy.get('select.focus\\:outline-none.text-dark-grey').should('exist');
    cy.get('select.focus\\:outline-none.text-dark-grey').should('have.value', '20');
    cy.get('select.focus\\:outline-none.text-dark-grey')
      .find('option')
      .should('have.length', 3)
      .each(($option, index) => {
        cy.wrap($option).should('have.value', options[index]);
        cy.wrap($option).should('have.text', options[index].toString());
      });
  });

  it('calls the onChange function when an option is selected', () => {
    const newValue = 50;
    cy.get('select.focus\\:outline-none.text-dark-grey').select(newValue.toString()).invoke('change');
    cy.get('@onChange').should('be.calledOnceWith', newValue);
  });
})