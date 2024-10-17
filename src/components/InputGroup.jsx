import React from 'react';

const InputGroup = ({ icon, type, placeholder }) => {
  return (
    <div className="relative w-full mb-4">
      <i className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-xl text-gray-500 ${icon}`}></i>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-3 text-base bg-gray-100 border-2 border-white rounded-lg focus:border-green-500 focus:outline-none transition duration-300"
      />
    </div>
  );
};

export default InputGroup;