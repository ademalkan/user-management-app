import React from 'react';
import TableTh from '@/components/molecules/TableTh';
import CustomHr from '@/components/atoms/CustomHr';
import TableTitle from '@/components/atoms/TableTitle';
import TableSearchAndActions, { User } from '@/components/molecules/TableSearchAndActions';

interface TableHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleAddUser: (user: User) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ searchQuery, setSearchQuery, handleAddUser }) => {
    return (
        <>
            <tr className="flex items-center justify-between">
                <th><TableTitle title="Students List" /></th>
                <th><TableSearchAndActions handleAddUser={handleAddUser} searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></th>
            </tr>
            <tr>
                <th><CustomHr /></th>
            </tr>
            <tr className="flex justify-between items-center text-center">
                <TableTh />
            </tr>
        </>
    );
}

export default TableHeader;
