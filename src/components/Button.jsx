import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;