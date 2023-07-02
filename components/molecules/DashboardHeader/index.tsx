import CaretCircleSvg from '@/components/atoms/CaretCircleSvg'
import NotificationsSvg from '@/components/atoms/NotificationsSvg'
import { actions } from '@/stores/site-settings-store';
import React from 'react'
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const DashboardHeader = () => {

    const dispatch = useDispatch();


    const handleSidebarShow = () => {
        dispatch(actions.sidebarToggle())
    };


    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className='hidden md:flex justify-between items-center h-6 mb-4'>
            {/* Caret Cirlce Svg */}
            <button onClick={handleSidebarShow}>
                <CaretCircleSvg />
            </button>

            {/* Notifications Svg */}
            <NotificationsSvg />
        </motion.div>
    )
}

export default DashboardHeader
