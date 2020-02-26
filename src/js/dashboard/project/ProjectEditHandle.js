import React from "react";
import { API } from "../../../config";
import { Formik } from "formik";
import { validationAddProject } from "../../utils";
import { ProjectForm } from "./";
import { toast } from "react-toastify";
import { MsgSuccess, MsgError } from "../../common";

export default class ProjectEditHandle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			thumbnail: "",
			hero: "",
			imglist: [],
			videolist: []
		};
	}

	// Get Project by Id
	async getProject() {
		const id = this.props.itemId;
		await API.get(`myProjects/${id}`)
			.then(res => {
				this.setState({
					name: res.data.name,
					description: res.data.description,
					thumbnail: res.data.thumbnail,
					hero: res.data.hero,
					imglist: res.data.imglist,
					videolist: res.data.videolist
				});
			})
			.catch(err => {
				alert("please check INTERNET connection");
			});
	}

	// Edit Project
	async editProject(name, description, thumbnail, hero, imglist, videolist) {
		const id = this.props.itemId;
		const project = {
			name,
			description,
			thumbnail,
			hero,
			imglist,
			videolist
		};
		await API.put(`myProjects/${id}`, project)
			.then(res => {
				this.props.onRefresh();
				toast(<MsgSuccess txtMsg="Update Success!" />);
			})
			.catch(err => {
				toast(
					<MsgError txtMsg="Update Fail!" icMsg="alert-triangle" />
				);
			});
	}

	handleSubmit = (values, { props = this.props, setSubmitting }) => {
		setTimeout(() => {
			this.editProject(
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

	componentDidMount() {
		this.getProject();
	}

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
				enableReinitialize
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
					<ProjectForm
						{...props}
						txtSubmit="Save"
						onCancel={this.props.onClose}
					/>
				)}
			/>
		);
	}
}
