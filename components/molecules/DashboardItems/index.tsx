"use client"
import { DashboardItemsI, dashboardItems } from '@/mocks/dashboardMocks';
import React from 'react';
import { motion } from 'framer-motion';

const DashboardItems = () => {
  return (
    <motion.div
      className='max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:items-center max-[600px]:gap-12 md-grid max-[600px]:w-screen justify-center md:flex md:justify-between md:items-start'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {dashboardItems.map((item: DashboardItemsI) => (
        <motion.div
          key={item.id}
          className={`max-w-sm w-72 m-auto p-6 rounded-lg shadow`}
          style={{ background: item.background }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {item.icon}
          <p className="text-muted text-sm pt-4">{item.subtitle}</p>
          <h6 className="text-end font-bold text-3xl">{item.amount}</h6>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DashboardItems;
