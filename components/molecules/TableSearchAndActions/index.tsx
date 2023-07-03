import React, { ChangeEvent, useState } from 'react';
import SearchSvg from '@/components/atoms/SearchSvg';
import UserModalForm from '../UserModalForm';

export interface User {
    id?: number | null;
    firstName: string;
    lastName: string;
    phone: string;
    domain: string;
    companyName: string;
    email: string;
    company?: {
        name: string;
    };
    image?: string;
}

const TableSearchAndActions = ({
    searchQuery,
    setSearchQuery,
    handleAddUser,
}: {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleAddUser: (user: User) => void;
}): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        phone: '',
        domain: '',
        companyName: '',
        email: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const query = event.target.value.trim();
        setSearchQuery(query);
        const url = new URL(window.location.href);
        url.searchParams.set('search', query);
        window.history.replaceState(null, '', url.toString());
    };

    const handleModalOpen = (): void => {
        setShowModal(true);
    };

    const handleModalClose = (): void => {
        setShowModal(false);
        setUser({
            firstName: '',
            lastName: '',
            phone: '',
            domain: '',
            companyName: '',
            email: '',
        });
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleAddUser(user);
        handleModalClose();
    };

    const handleFormInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    return (
        <div className="flex">
            <div className="flex items-center border bg-smoke-white border-open-gray rounded-lg p-2 mr-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-smoke-white w-full focus:outline-none"
                    value={searchQuery}
                    onInput={handleInputChange}
                />
                {/* Search SVG */}
                <SearchSvg />
            </div>
            <button className="bg-dark-yellow text-smoke-white px-3 py-3 font-medium rounded-md" onClick={handleModalOpen}>
                ADD NEW USER
            </button>

            <UserModalForm
                show={showModal}
                onClose={handleModalClose}
                onSubmit={handleFormSubmit}
                actionTypeCreate={true}
                onInputChange={handleFormInputChange}
            />
        </div>
    );
};

export default TableSearchAndActions;
