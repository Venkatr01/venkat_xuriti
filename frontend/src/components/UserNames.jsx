import React, { useEffect, useState } from 'react'
import UserList from './UserList';
import Button from '@mui/material/Button';

function UserNames() {

    const [showUserList, setShowUserList] = useState(false);

    const handleButtonClick = () => {
    //   setShowUserList(true);
    if(showUserList == false){
        setShowUserList(true)
    }else{
        setShowUserList(false)
    }
    };
    
  return (
    <div>
      <h1 className='wlcm'>Welcome to Venkat's Xuriti Assessment</h1><br />
      <h2 className='fonts'>Click the below button to fetch registered users data from backend</h2>
      <Button onClick={handleButtonClick} variant="outlined">Users List</Button>
        {showUserList && <UserList />}
    </div>
  )
}

export default UserNames