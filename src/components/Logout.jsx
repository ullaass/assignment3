import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { logout } from '../store/authSlice'; 


export default function Logout() { 
  const dispatch = useDispatch(); 

  const handleLogout = () => { 
    dispatch(logout()); 
    localStorage.removeItem('user'); 
    alert('Logout successful!'); 
  };

  return ( 
    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> {/* Logout button */}
      Logout
    </button>
  );
}
