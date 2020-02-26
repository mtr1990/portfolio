import React from "react";
import { API } from "../../config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import {
	Header,
	LoadingPage,
	BtnDarkMode,
	MsgSuccess,
	MsgError
} from "../common";
import { varWrapBoth, varfadeInUp, varIcon } from "../utils";
import { toast } from "react-toastify";
import { Container, Box, Typography, Button, Fab } from "@material-ui/core";
import { ProjectItemList, ProjectAddView, ProjectEditView } from "./project";

export default class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			isDone: undefined,
			showModalAdd: false,
			showModalEdit: false,
			getId: null,
			filter: "",
			reverse:
				localStorage.getItem("isReverse") === null ||
				localStorage.getItem("isReverse") === "false"
					? false
					: true
		};
	}

	openModalAdd = () => {
		this.setState({ showModalAdd: true });
	};

	closeModalAdd = () => {
		this.setState({ showModalAdd: false });
	};

	openModalEdit = id => {
		this.setState({ showModalEdit: true, getId: id });
	};

	closeModalEdit = () => {
		this.setState({ showModalEdit: false });
	};

	// Get Project
	getProject = async () => {
		await API.get(`myProjects`)
			.then(res => {
				const projects = res.data;
				if (this.state.reverse === true) {
					this.setState({
						projects: projects.reverse(),
						isDone: true
					});
				} else {
					this.setState({ projects, isDone: true });
				}
			})
			.catch(err => {
				alert("please check INTERNET connection");
			});
	};

	// Delete Project
	delProject = async id => {
		await API.delete(`myProjects/${id}`)
			.then(res => {
				this.getProject();
				toast(<MsgSuccess txtMsg="Remove Success!" />);
			})
			.catch(err => {
				toast(<MsgError txtMsg="Remove Fail!" />);
			});
	};

	// Filter Project
	filterProject = e => {
		this.setState({
			filter: e.target.value.substr(0, 20)
		});
	};

	// Reverse Project
	reverseProject = () => {
		const { reverse } = this.state;
		if (reverse === false) {
			localStorage.setItem("isReverse", "true");
			this.setState({
				reverse: true,
				projects: this.state.projects.reverse()
			});
		} else {
			localStorage.setItem("isReverse", "false");
			this.setState({
				reverse: false,
				projects: this.state.projects.reverse()
			});
		}
	};

	componentDidMount() {
		setTimeout(() => {
			this.getProject();
		}, 1200);
	}

	render() {
		let { projects, reverse, filter, isDone } = this.state;

		return (
			<>
				{!isDone ? (
					<LoadingPage staLoad={isDone} />
				) : (
					<motion.div
						initial="initial"
						animate="enter"
						exit="exit"
						variants={varWrapBoth}
					>
						<BtnDarkMode />

						<Header />

						<Container>
							{/********** Panel ***********/}
							<motion.div variants={varfadeInUp}>
								<Box
									mt={24}
									display="flex"
									alignItems="center"
									justifyContent="space-between"
								>
									<Box>
										<Typography variant="h1">
											Projects
										</Typography>

										<Typography
											variant="h5"
											color="textSecondary"
										>
											{projects.length} Projects
										</Typography>
									</Box>

									<Button
										to="/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBz/email"
										component={Link}
										color="primary"
										endIcon={
											<FeatherIcon icon="arrow-right" />
										}
									>
										Email
									</Button>
								</Box>
							</motion.div>

							{/********** Project List ***********/}
							<ProjectItemList
								staProject={projects}
								staFilter={filter}
								staReverse={reverse}
								filterProject={this.filterProject}
								reverseProject={this.reverseProject}
								delProject={this.delProject}
								editProject={this.openModalEdit}
							/>
							<Box height={160}></Box>
						</Container>

						<Box
							position="fixed"
							bottom={40}
							right={40}
							zIndex="mobileStepper"
						>
							<motion.div variants={varfadeInUp}>
								<motion.div
									whileTap="tap"
									whileHover="hover"
									variants={varIcon}
								>
									<Fab
										color="primary"
										onClick={this.openModalAdd}
										aria-label="add"
									>
										<FeatherIcon icon="plus" />
									</Fab>
								</motion.div>
							</motion.div>
						</Box>
					</motion.div>
				)}

				{/********** Project Card Add ***********/}
				<ProjectAddView
					onShow={this.state.showModalAdd}
					onHide={this.closeModalAdd}
					onRefresh={this.getProject}
				/>

				{/********** Project Card Edit ***********/}
				<ProjectEditView
					onShow={this.state.showModalEdit}
					onHide={this.closeModalEdit}
					itemId={this.state.getId}
					onRefresh={this.getProject}
				/>
			</>
		);
	}
}
