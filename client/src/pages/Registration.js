import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

function Registration() {
    const navigate = useNavigate();

    const initialValues = {
        userName: "",
        password: ""
    };

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/auth', data).then((response) => {
            console.log(response);
			navigate(`/`)
		});
    };

    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required()
    });

    return (
        <div className="createPostPage">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				<Form className="formContainer">					
					<label>Username: </label>
                    <ErrorMessage name="userName" component="span" />
					<Field
						id="inputCreatePost"
						name="userName"
						placeholder="(Ex. John123...)"
					/>
					<label>Password: </label>
                    <ErrorMessage name="password" component="span" />
					<Field
						id="inputCreatePost"
						name="password"
						placeholder="Your password"
                        type="password"
					/>
                    <button type="submit">Register</button>
				</Form>
			</Formik>
		</div>
    )
}

export default Registration
