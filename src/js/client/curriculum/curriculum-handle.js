import React, { Component } from "react";
import { API, urlCV } from "../../../config";
import { Formik } from "formik";
<<<<<<< HEAD:src/js/client/curriculum/curriculum-handle.js
import { validationGetCV } from "../../utilities";
=======
import { validationGetCV } from "../../utils";
>>>>>>> a8d48ca3934c9727b6cda7a7ca5d35fcd1f35535:src/js/client/curriculum/CurriculumHandle.js
import { CurriculumForm } from ".";

export default class CurriculumHandle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			setCode: "Hello",
			confirmCode: "",
			date: new Date().toLocaleString()
		};
	}

	openWindow = () => {
		window.open(urlCV, "_blank", "noopener noreferrer");
	};

	// Post Data
	async getCV(email, date) {
		const info = {
			email,
			date
		};
		await API.post(`emailList`, info)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		setTimeout(() => {
			this.openWindow();
			props.closeModal();
			this.getCV(values.email, values.date);
			setSubmitting(false);
		}, 800); // Important setTimeOut < 1000  RESOLVE popup blocked
		// console.log(JSON.stringify(values, null, 2));
		return;
	};

	render() {
		let { date, email, setCode, confirmCode } = this.state;
		return (
			<Formik
				initialValues={{
					date,
					email,
					setCode,
					confirmCode
				}}
				validationSchema={validationGetCV}
				onSubmit={this.handleSubmit}
				render={props => <CurriculumForm {...props} />}
			/>
		);
	}
}
