import React, { ReactNode } from 'react';

interface PanelDefaultLayoutProps {
    children: ReactNode;
}

const PanelDefaultLayout: React.FC<PanelDefaultLayoutProps> = ({ children }) => {

    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            {children}
        </div>
    );
};

export default PanelDefaultLayout;
