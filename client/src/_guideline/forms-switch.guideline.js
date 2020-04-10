import React from "react";
import { GlBlock } from ".";
import {
	Typography,
	Grid,
	FormGroup,
	FormControlLabel,
	Switch
} from "@material-ui/core";

import {
	SwitchInfo,
	SwitchSuccess,
	SwitchWarning,
	SwitchError
} from "../@material-ui-custom";

const GlSwitch = () => (
	<GlBlock>
		<Grid container>
			<Grid item xs={6}>
				<Typography
					variant="subtitle2"
					color="textSecondary"
					gutterBottom
				>
					Switch State
				</Typography>
				<FormGroup>
					<FormControlLabel
						control={<Switch defaultChecked value="checkedA" />}
						label="Secondary"
					/>
					<FormControlLabel
						control={
							<Switch
								defaultChecked
								value="checkedB"
								color="primary"
							/>
						}
						label="Primary"
					/>
					<FormControlLabel
						control={<Switch value="checkedC" />}
						label="Uncontrolled"
					/>
					<FormControlLabel
						disabled
						control={<Switch value="checkedD" />}
						label="Disabled"
					/>
					<FormControlLabel
						disabled
						control={<Switch checked value="checkedE" />}
						label="Disabled"
					/>
				</FormGroup>
			</Grid>

			<Grid item xs={6}>
				<Typography
					variant="subtitle2"
					color="textSecondary"
					gutterBottom
				>
					Switch Colors
				</Typography>

				<FormGroup>
					<FormControlLabel
						control={<SwitchInfo defaultChecked />}
						label="Info"
					/>
					<FormControlLabel
						control={<SwitchSuccess defaultChecked />}
						label="Success"
					/>
					<FormControlLabel
						control={<SwitchWarning defaultChecked />}
						label="Warning"
					/>
					<FormControlLabel
						control={<SwitchError defaultChecked />}
						label="Error"
					/>
				</FormGroup>
			</Grid>
		</Grid>
	</GlBlock>
);

export default GlSwitch;
