import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	const login = () => {
		const data = { userName: userName, password: password };
		axios
			.post('http://localhost:3001/auth/login', data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					sessionStorage.setItem('accessToken', response.data);
					navigate("/");
				}
			});
	};
	return (
		<div className="loginContainer">
			<label>Username:</label>
			<input
				type="text"
				onChange={(event) => {
					setUsername(event.target.value);
				}}
				value={userName}
				autoComplete={false}
			/>
			<label>Password:</label>
			<input
				type="password"
				onChange={(event) => {
					setPassword(event.target.value);
				}}
				value={password}
				autoComplete={false}
			/>

			<button onClick={login}> Login </button>
		</div>
	);
}

export default Login;
