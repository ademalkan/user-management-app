import React from 'react';

interface PageLimitSelectProps {
  options: number[];
  selectedOption: number;
  onChange: (value: number) => void;
}

const PageLimitSelect: React.FC<PageLimitSelectProps> = ({ options, selectedOption, onChange }) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div className="text-open-muted font-normal text-sm">
      Rows per page :
      <select className="focus:outline-none text-dark-grey" value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageLimitSelect;
