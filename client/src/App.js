import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
	return (
		<div className="App">
			<Router>
				<div className="navbar">
					<Link to="createpost">Create a Post</Link>
					<Link to="/">Home</Link>
				</div>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/createpost" exact element={<CreatePost />} />
					<Route path="/post/:id" exact element={<Post />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
