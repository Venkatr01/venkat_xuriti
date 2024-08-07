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
      <h1>Registered Users:</h1>
      
      <ul>
        {users.map(user => (
          <div className='centerIt' key={user._id}> <h4>{user.username}</h4></div>
        ))}
      </ul>
      <div>

      </div>
    </div>
  );
}

export default UserList;
