import React from "react";
import { withRouter } from "react-router-dom";
import { API } from "../../config";
import { motion } from "framer-motion";
import { NoMatchPage } from ".";
import { Header, Hero, BtnDarkMode } from "../common";
import { ProjectDetailsContent, ProjectDetailsControls } from "./project";
import { SmoothScrollbar, varfadeIn } from "../utilities";
import { Box } from "@material-ui/core";

class ProjectDetailsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: null
		};
	}

	// Get Project
	async getProject() {
		await API.get()
			.then(res => {
				const projects = res.data;
				this.setState({
					projects
				});
			})
			.catch(err => {
				alert("please check INTERNET connection");
				console.log(err);
			});
	}

	componentDidMount() {
		this.getProject();
	}

	render() {
		let { projects } = this.state;
		// let ItemId = parseInt(this.props.match.params._id, 10);
		let ItemId = this.props.match.params.id;

		if (!projects) {
			return null;
		} else {
			const currentItem = projects.find(item => item._id === ItemId);
			const currentIndex = projects.findIndex(item => item._id === ItemId);
			const prevItem = projects[currentIndex - 1];
			const nextItem = projects[currentIndex + 1];

			if (currentItem) {
				return (
					<motion.div initial="initial" animate="enter" exit="exit">
						<BtnDarkMode />

						{/********** Hero ***********/}
						<motion.div variants={varfadeIn}>
							<Hero img={currentItem} />
						</motion.div>

						<SmoothScrollbar>
							<Header />
							<Box height="100vh" />
							{/********** Content ***********/}
							<ProjectDetailsContent currentItem={currentItem} />
						</SmoothScrollbar>

						{/********** Controls ***********/}
						<motion.div variants={varfadeIn}>
							<ProjectDetailsControls
								prevItem={prevItem}
								nextItem={nextItem}
							/>
						</motion.div>
					</motion.div>
				);
			} else {
				return <NoMatchPage />;
			}
		}
	}
}
export default withRouter(ProjectDetailsPage);
