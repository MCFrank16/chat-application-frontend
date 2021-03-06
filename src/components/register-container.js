import { useState } from 'react';
import { Link } from 'react-router-dom';

import useToken from './useToken';
import axios from '../axios';

const registerUser = async (credentials) => {

	try {
		const result = await axios.post('/create/user', JSON.stringify(credentials));
	return result.data;
	} catch (error) {
		return error.response.status;
	}
}

const RegisterContainer = () => {

	const { setToken } = useToken();

	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();

		const { token } = await registerUser({
			firstname,
			lastname,
			username,
			password
		});

		setToken(token);
		
		return window.location = "/chat"
	}

    return (
        <div className="start-container">
            <header className="start-header">
				<h1><i className="fas fa-comments"></i> Cata </h1>
			</header>
            <main className="start-main">
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<label htmlFor="firstname">Firstname</label>
						<input
							type="text"
							name="firstname"
							id="firstname"
                            placeholder="firstname"
							required
							onChange={e => setFirstname(e.target.value)}
						/>
					</div>

					<div className="form-control">
						<label htmlFor="Lastname">Lastname</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
                            placeholder="lastname"
							required
							onChange={e => setLastname(e.target.value)}
						/>
					</div>

					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
                            placeholder="username"
							required
							onChange={e => setUserName(e.target.value)}
						/>
					</div>

					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
                            placeholder="password"
							required
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn">Register</button>
					<p className="Link"> Already a member? <Link className="linkname" to='/'>Click here</Link></p>
				</form>
			</main>
        </div>
    )
}

export default RegisterContainer;
