import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{ axios.get("http://localhost:5000/users").then(res=>setUsers(res.data)) }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => <li key={u._id}>{u.name} - {u.role}</li>)}
      </ul>
    </div>
  );
};

export default UserList;