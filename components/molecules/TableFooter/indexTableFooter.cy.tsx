import React from 'react';
import TableFooter from './index';
import { pageLimitOptionMocks } from '@/mocks/pageLimitOptionMocks';

describe('<TableFooter />', () => {



  const testFunciton = () => {
    console.log("clicked")
  };

  const pageLimit = 6;
  const handlePageLimitChange = testFunciton;
  const skip = 10;
  const limit = 10;
  const currentPage = 2;
  const total = 100;
  const handlePrevPage = testFunciton;
  const handleNextPage = testFunciton;

  beforeEach(() => {

    cy.mount(
      <table>
        <tbody>
          <TableFooter
            pageLimit={pageLimit}
            handlePageLimitChange={handlePageLimitChange}
            skip={skip}
            limit={limit}
            currentPage={currentPage}
            total={total}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </tbody>
      </table>
    );
  });

  it('renders the page limit select correctly', () => {
    cy.get('select').should('have.value', String(pageLimit));
    cy.get('select').select('6').should('have.value', '6');
  });

  it('renders the pagination information correctly', () => {
    cy.get('p').should('have.text', `${skip} - ${limit * currentPage} of ${total}`);
  });

  it('calls the previous page handler correctly', () => {
    cy.get('button').eq(0).click();
  });

  it('calls the next page handler correctly', () => {
    cy.get('button').eq(1).click();
  });

});
