import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-smoke-white">
      <h1 className="text-6xl font-bold text-dark-yellow mb-4">404</h1>
      <p className="text-xl text-dark-yellow mb-8">Not Found This Page</p>
      <Link href={"dashboard"} className="bg-dark-yellow text-smoke-white hover:bg-open-yellow transition-colors text-white font-bold py-2 px-4 rounded">
        Return Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
