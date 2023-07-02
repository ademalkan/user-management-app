import React from 'react';

interface ModalConfirmationProps {
    title: string;
    confirmAction: () => void;
    cancelAction: () => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = (props) => {
    const { confirmAction, cancelAction, title } = props;
    return (
        <div className="fixed inset-0 bg-white-grey flex items-center justify-center">
            <div className="bg-smoke-white p-5 rounded-lg">
                <p>{title}</p>
                <div className="flex justify-end mt-3">
                    <button
                        className="mr-4  transition-colors text-smoke-white bg-dark-yellow hover:bg-open-yellow hover:text-smoke-white p-2 rounded-lg"
                        onClick={confirmAction}
                    >
                        Confirm
                    </button>
                    <button
                        className="border border-dark-yellow transition-colors hover:bg-dark-yellow hover:text-smoke-white p-2 rounded-lg"
                        onClick={cancelAction}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmation;