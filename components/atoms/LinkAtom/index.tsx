import React from 'react';
import Link from 'next/link';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const LinkAtom: React.FC<LinkProps> = ({ href, className, children }) => {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
};

export default LinkAtom;
