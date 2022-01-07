import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/posts').then((response) => {
			setListOfPosts(response.data);
		});
	}, []);

    return (
        <div>
            {listOfPosts.map((post, index) => {
				return (
					<div className="post" key={index}>
						<div className="title">{post.title}</div>
						<div className="body">{post.postText}</div>
						<div className="footer">{post.userName}</div>
					</div>
				);
			})}
        </div>
    )
}

export default Home;
