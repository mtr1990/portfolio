import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { GlLayout, GlBlock } from "./";
import {
	TypographyInfo,
	TypographySuccess,
	TypographyWarning
} from "../@material-ui-custom";

const GlTypography = () => (
	<motion.div initial="initial" animate="enter" exit="exit">
		<GlLayout>
			<Typography variant="h2" color="textSecondary" gutterBottom>
				Typography
			</Typography>
			<GlBlock>
				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								H1
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="h1" component="h1">
								h1. Heading
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								H2
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="h2">h2. Heading</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								H3
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="h3">h3. Heading</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								H4
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="h4">h4. Heading</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								H5
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="h5">h5. Heading</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								H6
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="h6">h6. Heading</Typography>
						</Grid>
					</Grid>
				</Box>
			</GlBlock>

			<GlBlock>
				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Subtitle 1
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="subtitle1">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Subtitle 2
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="subtitle2">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Body 1
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body1">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Body 2
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body2">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Button
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="button" display="block">
								Button text
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Caption
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="caption" display="block">
								Caption Text
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Overline
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="overline" display="block">
								overline text
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</GlBlock>

			<GlBlock>
				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Primary
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body1" color="primary">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Secondary
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body1" color="secondary">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Text Primary
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body1" color="textPrimary">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Text Secondary
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body1" color="textSecondary">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Error
							</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant="body1" color="error">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Info
							</Typography>
						</Grid>
						<Grid item xs>
							<TypographyInfo variant="body1">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</TypographyInfo>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Success
							</Typography>
						</Grid>
						<Grid item xs>
							<TypographySuccess variant="body1">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</TypographySuccess>
						</Grid>
					</Grid>
				</Box>

				<Box mb={4}>
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} md={2}>
							<Typography
								variant="subtitle2"
								color="textSecondary"
							>
								Warning
							</Typography>
						</Grid>
						<Grid item xs>
							<TypographyWarning variant="body1">
								Cras ultricies mi eu turpis hendrerit fringilla.
								Fusce vel dui. Pellentesque auctor neque nec
								urna. Sed cursus turpis vitae tortor. Curabitur
								suscipit suscipit tellus.
							</TypographyWarning>
						</Grid>
					</Grid>
				</Box>
			</GlBlock>
		</GlLayout>
	</motion.div>
);

export default GlTypography;
