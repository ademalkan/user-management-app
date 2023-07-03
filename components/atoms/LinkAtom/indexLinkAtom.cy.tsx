import React from 'react';
import LinkAtom from './index';

describe('<LinkAtom />', () => {
  it('renders link with correct href and children', () => {
    const href = '/about';
    const linkText = 'About';

    cy.mount(<LinkAtom href={href}>{linkText}</LinkAtom>);

    cy.get('a')
      .should('have.attr', 'href', href)
      .and('have.text', linkText);
  });

  it('applies custom class name', () => {
    const href = '/contact';
    const linkText = 'Contact';
    const className = 'custom-link';

    cy.mount(<LinkAtom href={href} className={className}>{linkText}</LinkAtom>);

    cy.get('a')
      .should('have.class', className);
  });

  it('navigates to correct page on click', () => {
    const href = '/dashboard';
    const linkText = 'dashboard';

    cy.mount(<LinkAtom href={href}>{linkText}</LinkAtom>);

    cy.get('a')
      .click();

  });

});
