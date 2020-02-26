import React from "react";
import { API } from "../../../config";
import { Formik } from "formik";
import { validationAddProject } from "../../utils";
import { ProjectForm } from "./";
import { toast } from "react-toastify";
import { MsgSuccess, MsgError } from "../../common";

export default class ProjectAddHandle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			thumbnail: "",
			hero: "",
			imglist: [""],
			videolist: []
		};
	}

	// Add Project
	async addProject(name, description, thumbnail, hero, imglist, videolist) {
		const project = {
			name,
			description,
			thumbnail,
			hero,
			imglist,
			videolist
		};
		await API.post(`myProjects`, project)
			.then(res => {
				this.props.onRefresh();
				toast(<MsgSuccess txtMsg="Added Success!" />);
			})
			.catch(err => {
				toast(<MsgError txtMsg="Added Fail!" />);
			});
	}

	// Submit
	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		setTimeout(() => {
			this.addProject(
				values.name,
				values.description,
				values.thumbnail,
				values.hero,
				values.imglist,
				values.videolist
			);
			props.onClose();
			setSubmitting(false);
		}, 800);
		// console.log(JSON.stringify("Done", values, null, 2));
	};

	render() {
		let {
			name,
			description,
			thumbnail,
			hero,
			imglist,
			videolist
		} = this.state;

		return (
			<Formik
				initialValues={{
					name,
					description,
					thumbnail,
					hero,
					imglist,
					videolist
				}}
				validationSchema={validationAddProject}
				onSubmit={this.handleSubmit}
				render={props => (
					<>
						{/* <DisplayFormikState {...props} /> */}
						<ProjectForm
							{...props}
							txtSubmit="Create"
							onCancel={this.props.onClose}
						/>
					</>
				)}
			/>
		);
	}
}
