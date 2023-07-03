"use client"
import { FC, useState, useEffect } from 'react';
import LinkAtom from '@/components/atoms/LinkAtom';
import { MenuItem } from '@/mocks/menuMocks';

const SidebarMenu: FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
    const [activePage, setActivePage] = useState("dashboard");

    useEffect(() => {
        const handlePageChange = () => {
            setActivePage(window.location.pathname.substr(1));
        };

        handlePageChange(); 

        window.addEventListener("popstate", handlePageChange);

        return () => {
            window.removeEventListener("popstate", handlePageChange); 
        };
    }, []);

    return (
        <>
            {menuItems.map((item) => {
                return (
                    <div key={item.id}>
                        <LinkAtom
                            className={`${activePage === item.url.toLocaleLowerCase() ? 'bg-dark-yellow' : ''} hover:bg-dark-yellow flex items-center justify-center px-6 py-1 my-5 rounded-md`}
                            href={item.url}
                        >
                            <span className='mr-3'>{item.icon}</span> {item.name}
                        </LinkAtom>
                    </div>
                );
            })}
        </>
    );
};

export default SidebarMenu;
