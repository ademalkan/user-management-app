import React, { ReactNode } from 'react';

interface ButtonAtomProps {
  onClick?: () => void;
  children?: ReactNode;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ onClick, children }) => {
  return (
    <button
      className="w-full transition-colors bg-dark-yellow hover:bg-open-yellow text-smoke-white text-sm py-2 px-4 rounded focus:outline-none"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonAtom;
