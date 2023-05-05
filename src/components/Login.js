// Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ username, password }).toString(),
    });

    if (response.ok) {
      const data = await response.json();
      setUserInfo(data);
      loginUser();
      alert('Login successful.');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {userInfo && (
        <div>
          <h2>User Information</h2>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          {/* Добавьте дополнительную информацию пользователя здесь */}
        </div>
      )}
    </div>
  );
};

export default Login;
