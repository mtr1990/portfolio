import React from "react";
import { Formik } from "formik";
import { validationLogin } from "../../utils";
import { LoginForm } from "./";
import { history } from "../../../config";

export default class LoginHandle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			setPassword: "maimai90",
			adminPassword: ""
		};
	}

	handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			history.push("/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBzl");
			setSubmitting(false);
		}, 800);
	};

	render() {
		let { setPassword, adminPassword } = this.state;
		return (
			<Formik
				initialValues={{
					setPassword,
					adminPassword
				}}
				validationSchema={validationLogin}
				onSubmit={this.handleSubmit}
				render={props => <LoginForm {...props} />}
			/>
		);
	}
}
