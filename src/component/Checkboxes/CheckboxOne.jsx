import React, { useState } from 'react';

const CheckboxOne = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label
        htmlFor="checkboxLabelOne"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelOne"
            className="sr-only"
            onChange={toggleCheckbox}
            checked={isChecked}
          />
          <div
            className={`mr-4 flex items-center justify-center h-5 w-5 rounded border ${
              isChecked
                ? 'border-primary bg-gray-300 dark:bg-transparent'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            {isChecked && (
              <svg
                className="h-2.5 w-2.5 rounded-sm text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </div>
        </div>
        <span className="ml-2 text-black dark:text-white">Checkbox Text</span>
      </label>
    </div>
  );
};

export default CheckboxOne;
