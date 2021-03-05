import { useState } from 'react';
import { Link } from 'react-router-dom';
import useToken from './useToken';
import axios from '../axios';


const LoginUser = async (credentials) => {
	try {
		const result = await axios.post('/login/user', JSON.stringify(credentials));
		console.log(result)
	    return result.data;
	} catch (error) {
		return error.response.status;
	}
}

const LoginContainer = () => {

	const { setToken } = useToken();

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();

	const handleSubmit = async e => {
		e.preventDefault();

		const data = await LoginUser({
			username,
			password
		});

		if (data === 401){
			setError('Wrong username or password. Try again.')
		} else {
			setToken(data.token);
			return window.location = '/chat';
		}
        
	}

    return (
        <div className="start-container">
            <header className="start-header">
				<h1><i className="fas fa-comments"></i> Cata </h1>
			</header>
			<p className="error" id="error">{error}</p>
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
