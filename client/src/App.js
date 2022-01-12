import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Post from './pages/Post';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<div className="navbar">
					<Link to="/">Home</Link>
					<Link to="createpost">Create a Post</Link>
					<Link to="login">Login</Link>
					<Link to="registration">Register</Link>
				</div>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/createpost" exact element={<CreatePost />} />
					<Route path="/post/:id" exact element={<Post />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/registration" exact element={<Registration />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
