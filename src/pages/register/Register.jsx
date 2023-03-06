import React from 'react'
import './register.css'
import {  Link } from 'react-router-dom'
export default function Register() {
  return (
		<div
			className="
			register"
		>
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Username</label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your Username..."
				/>
				<label>Email</label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your Email..."
				/>
				<label>Password</label>
				<input
					className="registerInput"
					type="password"
					placeholder="Enter your Password..."
				/>
				<button className="registerButton">Register</button>
				<button className="registerLoginButton">
					<Link className="link" to='/login'>
						LOGIN
					</Link>
				</button>
			</form>
		</div>
	)
}

