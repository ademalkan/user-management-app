import React from 'react';
import PageLimitSelect from '@/components/molecules/PageLimitSelect';
import { pageLimitOptionMocks } from '@/mocks/pageLimitOptionMocks';

interface TableFooterProps {
    pageLimit: number;
    handlePageLimitChange: (value: number) => void;
    skip: number;
    limit: number;
    currentPage: number;
    total: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
}

const TableFooter: React.FC<TableFooterProps> = ({
    pageLimit,
    handlePageLimitChange,
    skip,
    limit,
    currentPage,
    total,
    handlePrevPage,
    handleNextPage,
}) => {

    if (total == 0) return <></>

    return (
        <>
            <tr className='flex justify-end items-center'>
                <th className="mr-5">
                    <PageLimitSelect
                        options={pageLimitOptionMocks}
                        selectedOption={pageLimit}
                        onChange={handlePageLimitChange}
                    />
                </th>
                <th className="flex">
                    <p className='text-open-muted font-normal text-sm'>{skip} - {limit * currentPage} of {total}</p>
                    <div className="ml-5 w-8  flex justify-between">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button onClick={handleNextPage} disabled={(currentPage * pageLimit) >= total}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </th>
            </tr >
        </>

    );
}

export default TableFooter;