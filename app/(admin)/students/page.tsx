import DashboardPage from '@/components/pages/admin/DashboardPage';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import UsersTable from '@/components/organisms/UsersTable';
interface PageProps {
  searchParams: {
    page?: number;
    size?: number;
    search?: string;
  };
}

const Page: React.FC<PageProps> = ({ searchParams }) => {
  const setSearchParams = {
    page: searchParams.page || 1,
    size: searchParams.size || 6,
    search: searchParams.search || "",
  };

  return (
    <main className='bg-smoke'>
      <DashboardPage>
        <UsersTable searchParams={setSearchParams} />
        <ToastContainer />

      </DashboardPage>
    </main>
  );
};

export default Page;
