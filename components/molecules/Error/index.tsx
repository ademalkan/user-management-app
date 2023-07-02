import React from 'react';
import { motion } from 'framer-motion';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex items-center justify-center p-8 bg-red-500 rounded-lg shadow-lg"
      >
        <div className="mr-4">
        <span className="text-2xl" role="img" aria-label="Error">❌</span>
        </div>
        <div className="text-white text-lg font-semibold">Oops! Bir hata oluştu.</div>
      </motion.div>
    </div>
  );
};

export default Error;
