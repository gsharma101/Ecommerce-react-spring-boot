import React from 'react';

interface OTPFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  helperText?: string;
}

const OTPField: React.FC<OTPFieldProps> = ({ label, error, helperText }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className='flex gap-3'>
      {[1,1,1,1,1,1].map((item, index)=><input
        key={index}
        type="text"
     
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none sm:text-sm h-14 w-14 flex justify-center items-center text-center`}
      />)}
      </div>
      {helperText && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>{helperText}</p>
      )}
    </div>
  );
};

export default OTPField;
