"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUsersI, createNewUser, deleteUser, fetchUsersAsync, fetchUsersSearch } from "@/services/users";
import { UserDataI } from '@/utils/interfaces/UserInterfaces';
import TableBody from '@/components/molecules/TableBody';
import TableFooter from '@/components/molecules/TableFooter';
import TableHeader from '@/components/molecules/TableHeader';
import { User } from '@/components/molecules/TableSearchAndActions';
import { toast } from 'react-toastify';

interface UsersTableProps {
    searchParams: {
        size: number;
        page: number;
        search: string;
    };
}

const UsersTable: React.FC<UsersTableProps> = ({ searchParams }) => {
    const dispatch = useDispatch<any>();
    const deletedUsers = useSelector((state: any) => state.users.deletedUsers);
    const addedUsers = useSelector((state: any) => state.users.addedUsers);
    const updatedUsers = useSelector((state: any) => state.users.updatedUsers);

    const [pageLimit, setPageLimit] = useState<number>(searchParams.size);
    const [currentPage, setCurrentPage] = useState<number>(searchParams.page);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handlePageLimitChange = (value: number) => {
        setPageLimit(value);
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };


    const handleUserDelete = async (id: number) => {
        try {
          dispatch(deleteUser(id));
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('An error occurred while deleting the user.');
        }
      };

    const handleAddUser = (user: User) => {
        const newUser: User = {
            ...user,
            company: { name: user.companyName  },
            image: "https://robohash.org/eosvoluptasquia.png"
        };
        dispatch(createNewUser(newUser));
        toast.success('User created successful.');
    };



    useEffect(() => {
        const params = {
            limit: pageLimit,
            skip: (currentPage - 1) * pageLimit,
            search: searchQuery
        };

        if (searchQuery) {
            dispatch(fetchUsersSearch(params));
        } else {
            dispatch(fetchUsersAsync(params));
        }

        const url = new URL(window.location.href);
        url.searchParams.set('size', pageLimit.toString());
        url.searchParams.set('page', currentPage.toString());
        window.history.replaceState(null, '', url.toString());
    }, [dispatch, pageLimit, currentPage, searchQuery]);

    const { error, loading, userData } = useSelector((state: any) => state.users);
    const { users, total, skip, limit }: UserDataI = userData;

    return (
        <>
            <table className="relative overflow-x-auto w-full m-auto text-sm">
                <thead>
                    <TableHeader handleAddUser={handleAddUser} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                </thead>
                <tbody>
                    <TableBody
                        handleUserDelete={handleUserDelete}
                        data={users}
                        deletedUsers={deletedUsers}
                        addedUsers={addedUsers}
                        updatedUsers={updatedUsers}
                        error={error}
                        loading={loading}
                    />
                </tbody>
                <tfoot>
                    <TableFooter
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePageLimitChange={handlePageLimitChange}
                        handlePrevPage={handlePrevPage}
                        limit={limit}
                        pageLimit={pageLimit}
                        skip={skip}
                        total={total}
                    />
                </tfoot>

            </table>
        </>
    );
};

export default UsersTable;
