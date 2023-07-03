import React from 'react';
import Input from './index';

describe('<Input />', () => {
  beforeEach(() => {
    cy.mount(
      <Input
        id="testInput"
        type="text"
        onChange={() => console.log('run')}
        placeholder="Test Value"
        value="Test Value"
        label="Sample Label"
        labelFor="testInput"
        labelDesc="Sample Description"
      />
    );
  });

  it('renders', () => {
    cy.get('input').should('exist');
  });

  it('should render input component with label and description', () => {
    cy.get('label').should('have.text', 'Sample Label (Sample Description)');
  });

  it('should update input value on change', () => {
    const typedValue = 'Test Value';
    cy.get('input').type(typedValue).should('have.value', typedValue);
  });
});
