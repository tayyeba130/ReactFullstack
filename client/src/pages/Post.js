import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
			console.log(response.data);
			setPost(response.data);
		});
	}, [id]);

	return (
		<div className="postPage">
			<div className="leftSide">
				<div className="post" id="individual">
					<div className="title">{post.title}</div>
					<div className="body">{post.postText}</div>
					<div className="footer">{post.userName}</div>
				</div>
			</div>
			<div className="rightSide">Comment section</div>
		</div>
	);
}

export default Post;
