"use client"
import DashboardHeader from '@/components/molecules/DashboardHeader';
import Sidebar from '@/components/organisms/Sidebar';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // const isAuth = useSelector((state: any) => state.auth.isAuth);
  const sidebarShow = useSelector((state: any) => state.siteSettings.sidebarShow);
  // const router = useRouter();
  
  // if (!isAuth) {
  //   router.replace("/");
  //   router.refresh();
  //   return null; 
  // }

  return (
    <>
      <Sidebar />
      <div className={`${sidebarShow ? "md:w-4/5 max-[600px]:w-screen max-[600px]:relative max-[600px]:overflow-x-auto py-3 md:py-0" : "w-11/12" } md:ml-auto md:p-12 md:pl-0`}>
        <DashboardHeader />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
