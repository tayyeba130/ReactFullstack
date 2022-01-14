import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
			setPost(response.data);
			setLoading(false);
		});
	}, [id]);

	useEffect(() => {
		axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
			setComments(response.data);
		});
	}, [id]);

	const addComment = async () => {
		axios
			.post(
				'http://localhost:3001/comments',
				{
					commentBody: newComment,
					PostId: id
				},
				{
					headers: {
						accessToken: localStorage.getItem('accessToken')
					}
				}
			)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error.message);
				} else {
					setNewComment('');
					axios
						.get(`http://localhost:3001/comments/${id}`)
						.then((response) => {
							setComments(response.data);
						});
				}
			});
	};

	if (loading) {
		return 'Loading...';
	}
	return (
		<div className="postPage">
			<div className="leftSide">
				<div className="post" id="individual">
					<div className="title">{post.title}</div>
					<div className="body">{post.postText}</div>
					<div className="footer">{post.userName}</div>
				</div>
			</div>
			<div className="rightSide">
				<div className="addCommentContainer">
					<input
						type="text"
						placeholder="Comment"
						onChange={(e) => setNewComment(e.target.value)}
						value={newComment}
					/>
					<button onClick={addComment}>Add comment</button>
				</div>
				<div className="listOfComments">
					{comments.map((comment) => {
						return (
							<div className="comment" key={comment.id}>
								{comment.commentBody}
								<label>Username: {comment.userName}</label>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Post;
