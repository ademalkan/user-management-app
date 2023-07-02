"use client"
import AppTitle from '@/components/atoms/AppTitle'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { menuItems } from '@/mocks/menuMocks';
import SidebarMenu from '@/components/molecules/SidebarMenu';
import LogoutSvg from '@/components/atoms/LogoutSvg';
import { useRouter } from 'next/navigation';
import { actions } from '@/stores/auth-store';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Sidebar = () => {

    const [showSettings, setShowSettings] = useState({
        inital: -300,
        animate: 0
    })
    const router = useRouter();
    const dispatch = useDispatch();


    const sidebarShow = useSelector((state: any) => state.siteSettings.sidebarShow);


    const handleLogout = () => {
        dispatch(actions.logout())
        toast.success('Logout successful. You are being redirected');
        router.replace("/");
        router.refresh();
    };

    useEffect(() => {
        if (sidebarShow) {
            setShowSettings({
                inital: -670,
                animate: 0
            })
        } else {
            setShowSettings({
                inital: 0,
                animate: -670
            })
        }
    }, [sidebarShow])

    return (
        <motion.div initial={{ x: showSettings.inital }}
            animate={{ x: showSettings.animate }}
            className={` bg-dashboard md:fixed md:h-screen w-full md:w-2/12 flex flex-col items-center justify-between py-6`}>
            <AppTitle barSize='h-5' textSize='text-xl' />
            <div className='hidden md:flex flex-col items-center'>
                <div className="h-24 w-24 bg-smoke-white flex items-center justify-center overflow-hidden rounded-full">
                    <Image
                        width={100}
                        height={100}
                        alt="Profile Photo"
                        className="h-full w-full object-cover"
                        src="https://robohash.org/hicveldicta.png"
                    />
                </div>
                <h6 className='font-bold text-base py-2'>John Doe</h6>
                <p className='text-dark-yellow text-sm'>Admin</p>
            </div>

            <div className='w-full grid grid-cols-2 gap-2 px-2 md:grid-cols-1 md:gap-0 md:block  md:px-10'>
                <SidebarMenu menuItems={menuItems} />
            </div>

            <button onClick={handleLogout} className='md:w-1/2 w-2/5 hover:bg-dark-yellow px-6 py-1 rounded-md flex justify-between items-center  '>Logout
                <LogoutSvg />
            </button>
        </motion.div >
    )
}

export default Sidebar
