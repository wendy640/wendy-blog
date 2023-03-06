import React from 'react'
import './settings.css'
import { Sidebar } from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							className=""
							src="https://easydrawingguides.com/wp-content/uploads/2023/01/black-girl-cartoon-11_black-girl-cartoon-drawing-tutorial.png"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: 'none' }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Username" />
					<label>Email</label>
					<input type="email" placeholder="Email" />
					<label>Password</label>
					<input type="password" placeholder="Password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}
