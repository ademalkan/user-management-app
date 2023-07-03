import React from 'react'
import { User } from '../TableSearchAndActions';

const UserModalForm = ({
    show,
    actionTypeCreate,
    onClose,
    onSubmit,
    onInputChange,
    user

}: {
    show: boolean;
    actionTypeCreate: boolean;
    onClose: () => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    user?: User
}): JSX.Element | null => {
    if (!show) {
        return null;
    }
    return (
        show && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-white-grey ">
                <div className="bg-smoke-white w-3/4 md:w-5/12 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-medium text-center mb-4">{actionTypeCreate ? "Add New User" : `Update User`}</h2>
                    <form onSubmit={onSubmit}>
                        <div className='grid grid-cols-2 gap-5' >
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="border rounded-md px-3 py-2 w-full"
                                    defaultValue={user?.firstName}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Surname</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    defaultValue={user?.lastName}
                                    className="border rounded-md px-3 py-2 w-full"
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    defaultValue={user?.phone}
                                    className="border rounded-md px-3 py-2 w-full"
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Website</label>
                                <input
                                    type="text"
                                    name="domain"
                                    defaultValue={user?.domain}
                                    className="border rounded-md px-3 py-2 w-full"
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    defaultValue={user?.company?.name}
                                    className="border rounded-md px-3 py-2 w-full"
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    className="border rounded-md px-3 py-2 w-full"
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="mr-4  transition-colors text-smoke-white bg-dark-yellow hover:bg-open-yellow hover:text-smoke-white p-2 rounded-lg">
                                {actionTypeCreate ? "Add New User" : `Update User`}
                            </button>
                            <button type="button" className="border border-dark-yellow transition-colors hover:bg-dark-yellow hover:text-smoke-white p-2 rounded-lg" onClick={onClose}>
                                Cancel
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    );
};


export default UserModalForm
