import React, { ReactNode } from 'react';
import styles from './index.module.css';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className={`${styles.linear_gradient} flex min-h-screen flex-col items-center justify-between md:p-24 p-12`}>
      {children}
    </div>
  );
};

export default DefaultLayout;
