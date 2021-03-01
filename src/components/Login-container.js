import { useState } from 'react';
import { Link } from 'react-router-dom';
import useToken from './useToken';

const LoginUser = async (credentials) => {

	console.log(process.env.PROD_URL);

	const result = await fetch(`https://realtime-chat-ossix.herokuapp.com/create/user`, {
		method: 'POST',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	});

	console.log(result);

	// return {
	// 	status: 200,
	// 	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTUNGcmFuazE2IiwiaWF0IjoxNjE0NjAyMzUyLCJleHAiOjE2MTQ2ODg3NTJ9.3fFb7ZUC_IJwgJth-lK3J3V4ToNSvVEX3wC_54_plLI"
	// };
}

const LoginContainer = () => {

	const { setToken } = useToken();

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();

		const { token } = await LoginUser({
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
					<button type="submit" className="btn">Login</button>
					<p className="Link"> Not a member? <Link className="linkname" to='/register'>Click here</Link></p>
				</form>
			</main>
        </div>
    )
}

export default LoginContainer;
