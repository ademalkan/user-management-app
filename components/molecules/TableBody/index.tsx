
import DeleteSvg from '@/components/atoms/DeleteSvg';
import EditSvg from '@/components/atoms/EditSvg';
import { UserI } from '@/utils/interfaces/UserInterfaces';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ModalConfirmation from '../ModalConfirmation';
import { User } from '../TableSearchAndActions';
import UserModalForm from '../UserModalForm';
import { useDispatch } from 'react-redux';
import { updateUser } from "@/services/users";
import Loading from '../Loading';
import Error from '../Error';
import NoData from '../NoData';
import { AnimatePresence, motion } from 'framer-motion';

interface TableBodyProps {
    data: UserI[] | null;
    error: boolean;
    loading: boolean;
    deletedUsers: number[];
    addedUsers: UserI[];
    updatedUsers: UserI[];
    handleUserDelete: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const { data, deletedUsers, error, loading, addedUsers, updatedUsers, handleUserDelete } = props;

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState<User>({
        id: selectedUserId,
        firstName: '',
        lastName: '',
        phone: '',
        domain: '',
        companyName: '',
        email: '',
    });

    const [isConfirmationVisible, setIsConfirmationVisible] = useState<boolean>(false);
    const [filteredData, setFilteredData] = useState<UserI[]>([]);

    const dispatch = useDispatch();

    const deleteHandler = (id: number) => {
        setSelectedUserId(id);
        setIsConfirmationVisible(true);
    };

    const confirmDelete = async (): Promise<void> => {
        if (selectedUserId !== null) {
            try {
                await handleUserDelete(selectedUserId);
                setIsConfirmationVisible(false);
                if (selectedUserId <= 100) {
                    toast.success('User deletion was successful.');
                } else {
                    toast.error(`User deletion error. The newly added user's information was not found in the endpoint`);
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                toast.error('An error occurred while deleting the user.');
            }
        }
    };


    const cancelDelete = () => {
        setSelectedUserId(null);
        setIsConfirmationVisible(false);
    };

    const handleModalOpen = (): void => {
        setShowModal(true);
    };

    const handleModalClose = (): void => {
        setShowModal(false);
        setUser({
            id: 0,
            firstName: '',
            lastName: '',
            phone: '',
            domain: '',
            companyName: '',
            email: '',
        });
    };


    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try {
            await dispatch(updateUser(user) as any);
            handleModalClose();
            if (user?.id !== null && user?.id !== undefined && user?.id <= 100) {
                toast.success('User update was successful.');
            } else {
                toast.error(`User update error. The updated user's information was not found in the endpoint.`);
            }
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('An error occurred while updating the user.');
        }
    };

    const handleFormInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const updateHandler = (user: User) => {
        setUser(user);
        handleModalOpen();
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const initialData = [...addedUsers, ...data].filter((user) => !deletedUsers.includes(user.id));
            setFilteredData(initialData);
        }
    }, [data, addedUsers, deletedUsers]);

    useEffect(() => {
        if (updatedUsers && updatedUsers.length > 0) {
            setFilteredData((prevData) => {
                const updatedData = [...prevData];
                updatedUsers.forEach((updatedUser) => {
                    const index = updatedData.findIndex((user) => user.id === updatedUser.id);
                    if (index !== -1) {
                        updatedData[index] = updatedUser;
                    }
                });
                return updatedData;
            });
        }
    }, [updatedUsers]);

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!Array.isArray(data) || data.length === 0) return <NoData />;

    return (
        <>
            <AnimatePresence>
                {filteredData.map((user: UserI) => (
                    <motion.tr
                        initial={{ opacity: 0, y: 380 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="bg-smoke-white mb-3 pe-3 text-center flex justify-between items-center"
                        key={user.id}
                    >
                        <td className="bg-white-yellow m-2 rounded-lg text-sm w-20">
                            <Image
                                width={65}
                                height={55}
                                alt={`${user.firstName} ${user.lastName}`}
                                className="text-sm h-full w-full object-cover"
                                src={user.image}
                            />
                        </td>
                        <td className="w-28 text-sm px-6 py-3">{user.firstName}</td>
                        <td className="w-28 text-sm px-6 py-3">{user.lastName}</td>
                        <td className="w-28 text-sm px-6 py-3">{user.email}</td>
                        <td className="w-28 text-sm px-6 py-3">{user.domain}</td>
                        <td className="w-28 text-sm px-6 py-3">{user.company.name}</td>
                        <td className="flex justify-between items-center w-28 text-sm px-6 py-3">
                            {/* edit svg */}
                            <button onClick={() => updateHandler(user as User)}>
                                <EditSvg />
                            </button>

                            {/* delete svg */}
                            <button onClick={() => deleteHandler(user.id)}>
                                <DeleteSvg />
                            </button>
                        </td>
                    </motion.tr>
                ))}

                {/* Delete confirmation modal */}
                {isConfirmationVisible && (
                    <ModalConfirmation title="Are you sure you want to delete this user?" cancelAction={cancelDelete} confirmAction={confirmDelete} />
                )}

                <UserModalForm
                    show={showModal}
                    onClose={handleModalClose}
                    onSubmit={handleFormSubmit}
                    user={user}
                    actionTypeCreate={false}
                    onInputChange={handleFormInputChange}
                />
            </AnimatePresence>
        </>
    );
};

export default TableBody;
