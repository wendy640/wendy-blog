import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import { TopBar } from './components/topbar/TopBar'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'

function App() {
  const user = false
	return (
		<>
			<TopBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/posts" element={<Home />} />
				<Route path="/register" element={user ? <Home/> : <Register />} />
				<Route path="/login" element={user ? <Home/> : <Login />} />
				<Route path="/write" element={user ? <Write /> : <Login/>} />
				<Route  path="/settings" element={user ? <Settings /> : <Login/>} />
			</Routes>
		</>
	)
}

export default App
