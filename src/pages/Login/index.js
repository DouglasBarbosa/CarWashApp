import React,  {useState } from 'react';
import './login.css';
import { PrimeIcons } from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Login = () => {
	const [email, seEmail] = useState("")
	const [password, setPassword] = useState("")
	const [show, setShow] = useState(false)
	
	return (
		<div className="login">
			<div className="login-logo">
				<img src="https://i.imgur.com/mA6zYIF.png?1" alt="Login"/>
			</div>

			<div className="login-right">
				<h1>Login</h1>

				<div className="login-loginInputEmail">
				<i className="pi pi-envelope"></i>
					<input
						type="text"
						placeholder="Digite um email"
						value={email}
						onChange={e => seEmail(e.target.value)}
					/>
				</div>

				<div className="login-loginInputPassword">
				<i className="pi pi-lock"></i>
					<input
						placeholder="Digite sua senha"
						type={show ? "text" : "password"}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className="login-eye">
						{show ? (
								<i className="pi pi-eye"></i>
						) : (
								<i className="pi pi-eye-slash" style={{'fontSize': '2em'}}></i>
						)}
					</div>
				</div>

				<button type="submit">
					Entrar
				</button>

				<h4>Não tenho conta!</h4>

				<button type="submit">
					Cadastrar
				</button>
			</div>
		</div>
	);
}

export default Login;