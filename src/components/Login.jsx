import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/authSlice';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { userData } = useSelector((state) => state.auth)
  console.log("useradat",userData)
  const dispatch = useDispatch();

 

  
  const onSubmit = data => {
    // For simplicity, assuming authentication is successful without actual validation
    // You may replace this with your authentication logic
    dispatch(setUser(data));
    localStorage.setItem('user', JSON.stringify(data));
    alert('Login successful!');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
          <input {...register('email', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
          {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input {...register('password', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          {errors.password && <p className="text-red-500 text-xs italic">Password is required.</p>}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
