import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

function CreatePost() {
	const navigate = useNavigate();

    const initialValues = {
        title: "",
        postText: "",
        userName: ""
    };

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/posts', data).then((response) => {
			navigate(`/`)
		});
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        userName: Yup.string().min(3).max(15).required()
    })

	return (
		<div className="createPostPage">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				<Form className="formContainer">
					<label>Title: </label>
                    <ErrorMessage name="title" component="span" />
					<Field
						id="inputCreatePost"
						name="title"
						placeholder="(Ex. Title...)"
					/>
					<label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
					<Field
						id="inputCreatePost"
						name="postText"
						placeholder="(Ex. Post...)"
					/>
					<label>Username: </label>
                    <ErrorMessage name="userName" component="span" />
					<Field
						id="inputCreatePost"
						name="userName"
						placeholder="(Ex. John123...)"
					/>
                    <button type="submit">Create Post</button>
				</Form>
			</Formik>
		</div>
	);
}

export default CreatePost;
