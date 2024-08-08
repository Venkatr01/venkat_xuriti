import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    axios.get('https://venkat-xuriti.onrender.com/allusers', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }, 
    })
      .then(response => {
        setUsers(response.data.usersData); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className='fonts register'>Registered Users:</div>
      
      <ul className='fonts'>
        {users.map(user => (
          <div className='fonts names' key={user._id}>{user.username}</div>
        ))}
      </ul>
      <div>

      </div>
    </div>
  );
}

export default UserList;
