import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';

const SignupPage = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-green-400 to-green-600 items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Join With Us</h2>
          <p className="text-xl">Start your journey with our community today!</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <InputGroup icon="bx bxs-user" type="text" placeholder="Username" />
            <InputGroup icon="bx bx-mail-send" type="email" placeholder="Email" />
            <InputGroup icon="bx bxs-lock-alt" type="password" placeholder="Password" />

            {/* Radio button group for role selection */}
            <div className="mb-6">
              <h3 className="font-bold mb-2">Select Your Role</h3>
              <div className="flex items-center mb-2">
                <input 
                  type="radio" 
                  id="buyer" 
                  name="role" 
                  value="buyer" 
                  checked={role === 'buyer'} 
                  onChange={handleRoleChange} 
                  className="mr-2"
                />
                <label htmlFor="buyer" className="text-lg">Buyer</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="projectOwner" 
                  name="role" 
                  value="projectOwner" 
                  checked={role === 'projectOwner'} 
                  onChange={handleRoleChange} 
                  className="mr-2"
                />
                <label htmlFor="projectOwner" className="text-lg">Project Owner</label>
              </div>
            </div>

            <Button>Sign up</Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
