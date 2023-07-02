import React, { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  label?: string;
  labelFor?: string;
  labelDesc?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, value, label,labelFor, labelDesc, onChange }) => {
  return (
    <>
      {label && <label className="block text-muted text-sm mb-2" htmlFor={labelFor}>
        {label} <span className="text-xs">({labelDesc})</span>
      </label>}

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 border-r-muted leading-tight text-sm focus:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>

  );
};

export default Input;
