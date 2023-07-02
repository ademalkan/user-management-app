import DashboardLayout from '@/components/templates/DashboardLayout';
import React, { ReactNode } from 'react';


const DashboardPage = ({ children }: { children: ReactNode }) => {
    return <div className='flex flex-col md:flex-row'>
        <DashboardLayout>
            {children}
        </DashboardLayout>
    </div>
};

export default DashboardPage;
