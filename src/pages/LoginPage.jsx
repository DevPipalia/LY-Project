import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
          <form>
            <InputGroup icon="bx bxs-user" type="text" placeholder="Username" />
            <InputGroup icon="bx bxs-lock-alt" type="password" placeholder="Password" />
            <Button>Sign in</Button>
          </form>
          <p className="mt-4 text-center">
            <a href="#" className="text-green-500 hover:underline">Forgot password?</a>
          </p>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-500 hover:underline">Sign up here</Link>
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-green-400 to-green-600 items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-xl">Sign in to continue your journey with us.</p>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;