import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading,logout}= useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
         <TbLogout2 className='w-6 h-6 text-red-300 cursor-pointer' 
         onClick={logout}
       />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton