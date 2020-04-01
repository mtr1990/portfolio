import React from "react";
import { motion } from "framer-motion";
import { GlLayout, GlBlock } from ".";
import {
	Grid,
	Box,
	Typography,
	Button,
	ButtonGroup,
	IconButton,
	Icon,
	Fab,
	makeStyles
} from "@material-ui/core";
import {
	Add as AddIcon,
	Edit as EditIcon,
	Favorite as FavoriteIcon,
	Navigation as NavigationIcon,
	Delete as DeleteIcon,
	ArrowDownward as ArrowDownwardIcon,
	CloudUpload as CloudUploadIcon,
	Save as SaveIcon,
	Alarm as AlarmIcon,
	AddShoppingCart as AddShoppingCartIcon,
	KeyboardVoice as KeyboardVoiceIcon,
	PhotoCamera
} from "@material-ui/icons";

import {
	// IconButton
	IconButtonInfo,
	IconButtonSuccess,
	IconButtonWarning,
	IconButtonError,
	// Fab
	FabBasic,
	FabInfo,
	FabSuccess,
	FabWarning,
	FabError,
	// BtnContained
	BtnContainedBasic,
	BtnContainedInfo,
	BtnContainedSuccess,
	BtnContainedWarning,
	BtnContainedError,
	// BtnOutlined
	BtnOutlinedBasic,
	BtnOutlinedInfo,
	BtnOutlinedSuccess,
	BtnOutlinedWarning,
	BtnOutlinedError,
	// BtnText
	BtnBasic,
	BtnInfo,
	BtnSuccess,
	BtnWarning,
	BtnError
} from "../@material-ui-custom";

const useStyles = makeStyles(theme => ({
	root: {
		"& button,& label,& a": {
			marginRight: theme.spacing(2),
			marginBottom: theme.spacing(2)
		},
		"& .MuiButtonGroup-root": {
			marginBottom: theme.spacing(2),
			"& button,& a": {
				marginRight: 0,
				marginBottom: 0
			}
		}
	}
}));

const GlButtons = () => {
	const classes = useStyles();
	return (
		<motion.div initial="initial" animate="enter" exit="exit">
			<GlLayout>
				<Box className={classes.root}>
					<Typography variant="h2" color="textSecondary" gutterBottom>
						Buttons
					</Typography>
					{/********** Contained Buttons ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Contained Buttons
						</Typography>

						<BtnContainedBasic>Default</BtnContainedBasic>
						<Button variant="contained" color="primary">
							Primary
						</Button>
						<Button variant="contained" color="secondary">
							Secondary
						</Button>
						<BtnContainedInfo>Info</BtnContainedInfo>
						<BtnContainedSuccess>Success</BtnContainedSuccess>
						<BtnContainedWarning>Warning</BtnContainedWarning>
						<BtnContainedError>Error</BtnContainedError>
						<Button variant="contained" color="primary" disabled>
							Disabled
						</Button>
						<Button variant="contained" color="primary" href="">
							Link
						</Button>
					</GlBlock>

					{/********** Outlined Buttons ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Outlined Buttons
						</Typography>

						<BtnOutlinedBasic>Default</BtnOutlinedBasic>
						<Button variant="outlined" color="primary">
							Primary
						</Button>
						<Button variant="outlined" color="secondary">
							Secondary
						</Button>
						<BtnOutlinedInfo>Info</BtnOutlinedInfo>
						<BtnOutlinedSuccess>Success</BtnOutlinedSuccess>
						<BtnOutlinedWarning>Warning</BtnOutlinedWarning>
						<BtnOutlinedError>Error</BtnOutlinedError>
						<Button variant="outlined" color="primary" disabled>
							Disabled
						</Button>
						<Button variant="outlined" color="primary" href="">
							Link
						</Button>
					</GlBlock>

					{/********** Text Buttons ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Text Buttons
						</Typography>

						<BtnBasic>Default</BtnBasic>
						<Button color="primary">Primary</Button>
						<Button color="secondary">Secondary</Button>
						<BtnInfo>Info</BtnInfo>
						<BtnSuccess>Success</BtnSuccess>
						<BtnWarning>Warning</BtnWarning>
						<BtnError>Error</BtnError>
						<Button color="primary" disabled>
							Disabled
						</Button>
						<Button color="primary" href="">
							Link
						</Button>
					</GlBlock>

					{/********** Grouped Buttons ***********/}
					<GlBlock>
						<Grid container>
							<Grid item xs={12} lg={4}>
								<Typography
									variant="subtitle2"
									color="textSecondary"
									gutterBottom
								>
									Grouped Buttons
								</Typography>

								<ButtonGroup
									color="primary"
									aria-label="outlined primary button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
								<br />
								<ButtonGroup
									variant="contained"
									color="primary"
									aria-label="contained primary button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
								<br />
								<ButtonGroup
									variant="text"
									color="primary"
									aria-label="text primary button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
							</Grid>

							<Grid item xs={12} lg={4}>
								<Typography
									variant="subtitle2"
									color="textSecondary"
									gutterBottom
								>
									Group sizes and colors
								</Typography>
								<ButtonGroup
									size="small"
									aria-label="small outlined button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
								<br />
								<ButtonGroup
									color="secondary"
									aria-label="outlined secondary button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
								<br />
								<ButtonGroup
									size="large"
									color="primary"
									aria-label="large outlined primary button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
							</Grid>

							<Grid item xs={12} lg={4}>
								<Typography
									variant="subtitle2"
									color="textSecondary"
									gutterBottom
								>
									Grouped orientation
								</Typography>

								<ButtonGroup
									orientation="vertical"
									color="primary"
									aria-label="vertical outlined primary button group"
								>
									<Button>One</Button>
									<Button>Two</Button>
									<Button>Three</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
					</GlBlock>

					{/********** Floating Action Buttons ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Floating Action Buttons
						</Typography>
						<FabBasic aria-label="add">
							<AddIcon />
						</FabBasic>
						<Fab color="primary" aria-label="add">
							<AddIcon />
						</Fab>
						<Fab color="secondary" aria-label="edit">
							<EditIcon />
						</Fab>
						<FabInfo aria-label="edit">
							<EditIcon />
						</FabInfo>
						<FabSuccess aria-label="edit">
							<EditIcon />
						</FabSuccess>
						<FabWarning aria-label="edit">
							<EditIcon />
						</FabWarning>
						<FabError aria-label="edit">
							<EditIcon />
						</FabError>
						<FabBasic variant="extended">
							<NavigationIcon />
							Navigate
						</FabBasic>
						<Fab disabled aria-label="like" color="primary">
							<FavoriteIcon />
						</Fab>
					</GlBlock>

					{/********** Upload button ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Upload button
						</Typography>

						<input
							accept="image/*"
							style={{ display: "none" }}
							id="contained-button-file"
							multiple
							type="file"
						/>
						<label htmlFor="contained-button-file">
							<Button
								variant="contained"
								color="primary"
								component="span"
							>
								Upload
							</Button>
						</label>
						<input
							accept="image/*"
							style={{ display: "none" }}
							id="text-button-file"
							multiple
							type="file"
						/>
						<label htmlFor="text-button-file">
							<Button component="span">Upload</Button>
						</label>
						<input
							accept="image/*"
							style={{ display: "none" }}
							id="outlined-button-file"
							multiple
							type="file"
						/>
						<label htmlFor="outlined-button-file">
							<Button variant="outlined" component="span">
								Upload
							</Button>
						</label>
						<input
							accept="image/*"
							style={{ display: "none" }}
							id="icon-button-file"
							type="file"
						/>
						<label htmlFor="icon-button-file">
							<IconButton
								color="primary"
								aria-label="upload picture"
								component="span"
							>
								<PhotoCamera />
							</IconButton>
						</label>
					</GlBlock>

					{/********** Sizes ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Sizes
						</Typography>

						<Grid container>
							<Grid item xs={6}>
								<div>
									<Button size="small">Small</Button>
									<Button size="medium">Medium</Button>
									<Button size="large">Large</Button>
								</div>
								<div>
									<Button
										variant="outlined"
										size="small"
										color="primary"
									>
										Small
									</Button>
									<Button
										variant="outlined"
										size="medium"
										color="primary"
									>
										Medium
									</Button>
									<Button
										variant="outlined"
										size="large"
										color="primary"
									>
										Large
									</Button>
								</div>
								<div>
									<Button
										variant="contained"
										size="small"
										color="primary"
									>
										Small
									</Button>
									<Button
										variant="contained"
										size="medium"
										color="primary"
									>
										Medium
									</Button>
									<Button
										variant="contained"
										size="large"
										color="primary"
									>
										Large
									</Button>
								</div>
							</Grid>

							<Grid item xs={6}>
								<div>
									<Fab
										size="small"
										color="secondary"
										aria-label="add"
									>
										<AddIcon />
									</Fab>
									<Fab
										size="medium"
										color="secondary"
										aria-label="add"
									>
										<AddIcon />
									</Fab>
									<Fab color="secondary" aria-label="add">
										<AddIcon />
									</Fab>
								</div>
								<div>
									<Fab
										variant="extended"
										size="small"
										color="primary"
										aria-label="add"
									>
										<NavigationIcon />
										Extended
									</Fab>
									<Fab
										variant="extended"
										size="medium"
										color="primary"
										aria-label="add"
									>
										<NavigationIcon />
										Extended
									</Fab>
									<Fab
										variant="extended"
										color="primary"
										aria-label="add"
									>
										<NavigationIcon />
										Extended
									</Fab>
								</div>
								<div>
									<IconButton
										aria-label="delete"
										size="small"
									>
										<ArrowDownwardIcon fontSize="inherit" />
									</IconButton>
									<IconButton aria-label="delete">
										<DeleteIcon fontSize="small" />
									</IconButton>
									<IconButton aria-label="delete">
										<DeleteIcon />
									</IconButton>
									<IconButton aria-label="delete">
										<DeleteIcon fontSize="large" />
									</IconButton>
								</div>
							</Grid>
						</Grid>
					</GlBlock>

					{/********** Buttons with icons and label ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Buttons with icons and label
						</Typography>

						<Button
							variant="contained"
							color="secondary"
							startIcon={<DeleteIcon />}
						>
							Delete
						</Button>
						{/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
						<Button
							variant="contained"
							color="primary"
							endIcon={<Icon>send</Icon>}
						>
							Send
						</Button>
						<BtnContainedBasic startIcon={<CloudUploadIcon />}>
							Upload
						</BtnContainedBasic>
						<Button
							variant="contained"
							disabled
							color="secondary"
							startIcon={<KeyboardVoiceIcon />}
						>
							Talk
						</Button>
						<Button
							variant="contained"
							color="primary"
							size="small"
							startIcon={<SaveIcon />}
						>
							Save
						</Button>
						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<SaveIcon />}
						>
							Save
						</Button>
					</GlBlock>

					{/********** Button Icon ***********/}
					<GlBlock>
						<Typography
							variant="subtitle2"
							color="textSecondary"
							gutterBottom
						>
							Icon Buttons
						</Typography>
						<IconButton aria-label="delete">
							<DeleteIcon />
						</IconButton>
						<IconButton color="primary" aria-label="add an alarm">
							<AlarmIcon />
						</IconButton>
						<IconButton
							color="secondary"
							aria-label="add to shopping cart"
						>
							<AddShoppingCartIcon />
						</IconButton>
						<IconButtonInfo aria-label="add to shopping cart">
							<AddShoppingCartIcon />
						</IconButtonInfo>
						<IconButtonSuccess aria-label="add to shopping cart">
							<AddShoppingCartIcon />
						</IconButtonSuccess>
						<IconButtonWarning aria-label="add to shopping cart">
							<AddShoppingCartIcon />
						</IconButtonWarning>
						<IconButtonError aria-label="add to shopping cart">
							<AddShoppingCartIcon />
						</IconButtonError>
						<IconButton
							disabled
							color="primary"
							aria-label="add an alarm"
						>
							<AlarmIcon />
						</IconButton>
					</GlBlock>
				</Box>
			</GlLayout>
		</motion.div>
	);
};

export default GlButtons;
