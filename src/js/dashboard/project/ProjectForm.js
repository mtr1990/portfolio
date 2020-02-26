import React from "react";
import { Form, FieldArray } from "formik";
import { ScrollComponent } from "../../common";
import FeatherIcon from "feather-icons-react";
import {
	Grid,
	Box,
	Button,
	CircularProgress,
	InputAdornment,
	FormHelperText,
	FormControl,
	OutlinedInput,
	InputLabel,
	TextField,
	Typography,
	IconButton
} from "@material-ui/core";
const ProjectForm = ({
	values,
	isSubmitting,
	handleChange,
	txtSubmit,
	onCancel,
	touched,
	errors
}) => (
	<Form autoComplete="off" noValidate>
		<ScrollComponent height={840}>
			{/********** Name ***********/}
			<Box my={1}>
				<FormControl
					error={touched.name && errors.name ? true : false}
					fullWidth
					variant="outlined"
				>
					<InputLabel>Name</InputLabel>
					<OutlinedInput
						name="name"
						value={values.name}
						onChange={handleChange}
						startAdornment={
							<InputAdornment position="start">
								<FeatherIcon icon="edit-3" />
							</InputAdornment>
						}
						labelWidth={48}
					/>
					<FormHelperText>
						{touched.name ? errors.name : ""}
					</FormHelperText>
				</FormControl>
			</Box>

			{/********** Description ***********/}
			<Box mb={1}>
				<FormControl
					error={
						touched.description && errors.description ? true : false
					}
					fullWidth
					variant="outlined"
				>
					<InputLabel>Description</InputLabel>
					<OutlinedInput
						multiline
						name="description"
						value={values.description}
						onChange={handleChange}
						startAdornment={
							<InputAdornment position="start">
								<FeatherIcon icon="align-left" />
							</InputAdornment>
						}
						labelWidth={92}
					/>
					<FormHelperText>
						{touched.description ? errors.description : ""}
					</FormHelperText>
				</FormControl>
			</Box>

			{/********** Thumbnail ***********/}
			<Box mb={1}>
				<FormControl
					error={touched.thumbnail && errors.thumbnail ? true : false}
					fullWidth
					variant="outlined"
				>
					<InputLabel>Thumbnail</InputLabel>
					<OutlinedInput
						name="thumbnail"
						value={values.thumbnail}
						onChange={handleChange}
						startAdornment={
							<InputAdornment position="start">
								<FeatherIcon icon="image" />
							</InputAdornment>
						}
						labelWidth={84}
					/>
					<FormHelperText>
						{touched.thumbnail ? errors.thumbnail : ""}
					</FormHelperText>
				</FormControl>
			</Box>

			{/********** Hero ***********/}
			<Box mb={1}>
				<FormControl
					error={touched.hero && errors.hero ? true : false}
					fullWidth
					variant="outlined"
				>
					<InputLabel>Hero</InputLabel>
					<OutlinedInput
						name="hero"
						value={values.hero}
						onChange={handleChange}
						startAdornment={
							<InputAdornment position="start">
								<FeatherIcon icon="airplay" />
							</InputAdornment>
						}
						labelWidth={40}
					/>
					<FormHelperText>
						{touched.hero ? errors.hero : ""}
					</FormHelperText>
				</FormControl>
			</Box>

			{/********** Images ***********/}
			<Box mb={2}>
				<Typography variant="h5" color="textSecondary" gutterBottom>
					Images
				</Typography>
				<FieldArray
					name="imglist"
					render={arrayHelpers => (
						<Box display="flex" alignItems="flex-start">
							<Box mr={2} flexShrink={0}>
								<IconButton
									className="_primary"
									onClick={() => arrayHelpers.push("")}
									aria-label="add input"
								>
									<FeatherIcon icon="plus" />
								</IconButton>
							</Box>

							<Box width="100%">
								{values.imglist.map((img, index) => (
									<Box
										key={index}
										display="flex"
										alignItems="center"
										mb={1}
									>
										<TextField
											fullWidth
											size="small"
											variant="outlined"
											label={`img ${index + 1}`}
											name={`imglist[${index}]`}
											value={img}
											onChange={handleChange}
										/>

										<Box ml={2} flexShrink={0}>
											<IconButton
												onClick={() =>
													arrayHelpers.remove(index)
												}
												aria-label="remove input"
											>
												<FeatherIcon icon="trash" />
											</IconButton>
										</Box>
									</Box>
								))}
							</Box>
						</Box>
					)}
				/>
			</Box>

			{/********** Videos ***********/}
			<Typography variant="h5" color="textSecondary" gutterBottom>
				Videos
			</Typography>

			<FieldArray
				name="videolist"
				render={arrayHelpers => (
					<Box display="flex" alignItems="flex-start">
						<Box mr={2} flexShrink={0}>
							<IconButton
								className="_primary"
								onClick={() =>
									arrayHelpers.push({
										thumbnail: "",
										url: ""
									})
								}
								aria-label="add input"
							>
								<FeatherIcon icon="plus" />
							</IconButton>
						</Box>

						<Box width="100%">
							{values.videolist &&
								values.videolist.map((video, index) => (
									<Box
										key={index}
										display="flex"
										alignItems="center"
										mb={1}
									>
										<TextField
											fullWidth
											size="small"
											variant="outlined"
											label={`thumbnail ${index + 1}`}
											name={`videolist[${index}].thumbnail`}
											value={video.thumbnail}
											onChange={handleChange}
										/>

										<Box width="100%" ml={2}>
											<TextField
												fullWidth
												size="small"
												variant="outlined"
												label={`url ${index + 1}`}
												name={`videolist[${index}].url`}
												value={video.url}
												onChange={handleChange}
											/>
										</Box>

										<Box ml={2} flexShrink={0}>
											<IconButton
												onClick={() =>
													arrayHelpers.remove(index)
												}
												aria-label="remove input"
											>
												<FeatherIcon icon="trash" />
											</IconButton>
										</Box>
									</Box>
								))}
						</Box>
					</Box>
				)}
			/>

			{/********** Footer ***********/}
			<Box p={3} width="100%" position="absolute" bottom={0} left={0}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Button
							fullWidth
							color="primary"
							variant="outlined"
							size="large"
							onClick={onCancel}
						>
							Cancel
						</Button>
					</Grid>

					<Grid item xs={6}>
						<Button
							fullWidth
							color="primary"
							type="submit"
							variant="contained"
							size="large"
							disabled={isSubmitting}
							startIcon={
								isSubmitting ? (
									<CircularProgress
										size={24}
										thickness={4}
										color="inherit"
									/>
								) : (
									""
								)
							}
						>
							{isSubmitting ? "Please wait..." : txtSubmit}
						</Button>
					</Grid>
				</Grid>
			</Box>
		</ScrollComponent>
	</Form>
);

export default ProjectForm;
