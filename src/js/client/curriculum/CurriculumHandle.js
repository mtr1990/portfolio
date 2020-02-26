import React, { Component } from "react";
import { API, urlCV } from "../../../config";
import { Formik } from "formik";
import { validationGetCV } from "../../utils";
import { CurriculumForm } from "./";

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
