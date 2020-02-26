import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { API } from "../../config";
import { varWrapBoth, varfadeInUp } from "../utils";
import { Header, BtnDarkMode, MsgSuccess, MsgError } from "../common";
import { EmailItemList } from "./email";
import { Container, Box, Typography, Button } from "@material-ui/core";

export default class EmailPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emails: []
		};
	}

	// Get Email
	async getEmail() {
		await API.get(`emailList`)
			.then(res => {
				const emails = res.data;
				this.setState({ emails });
			})
			.catch(err => {
				alert("please check INTERNET connection");
			});
	}

	// Delete Email
	delEmail = id => {
		API.delete(`emailList/${id}`)
			.then(res => {
				this.getEmail();
				toast(<MsgSuccess txtMsg="Remove Success!" />);
			})
			.catch(err => {
				toast(<MsgError txtMsg="Remove Fail!" />);
			});
	};

	componentDidMount() {
		this.getEmail();
	}

	render() {
		let { emails } = this.state;

		return (
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
						<Box mt={24} mb={4}>
							<Button
								color="primary"
								component={Link}
								to="/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBzl"
								className="_primary"
								startIcon={<FeatherIcon icon="arrow-left" />}
							>
								Back
							</Button>

							<Typography variant="h1">Emails</Typography>
							<Typography variant="h5" color="textSecondary">
								{emails.length} email
							</Typography>
						</Box>
					</motion.div>
					{/********** Email List ***********/}
					<EmailItemList staEmail={emails} delEmail={this.delEmail} />
					<Box height={160}></Box>
				</Container>
			</motion.div>
		);
	}
}
