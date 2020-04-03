// Light Common
const color_primary = "hsl(18, 100%, 50%)";
const color_secondary = "hsl(349, 75%, 51%)";
const color_info = "hsl(208, 80%, 52%)";
const color_success = "hsl(131, 50%, 50%)";
const color_warning = "hsl(42, 96%, 50%)";
const color_error = "hsl(0, 94%, 65%)";
const color_white = "#FFF";
// const color_black = "#000";
// Light Theme
const color_light_bg = "hsl(192, 16%, 94%)";
const color_light_contrast_lower = "hsl(204, 14%, 85%)";
const color_light_contrast_low = "hsl(208, 13%, 77%)";
const color_light_contrast_medium = "hsl(210, 13%, 72%)";
const color_light_contrast_high = "hsl(211, 12%, 56%)";
const color_light_contrast_higher = "hsl(210, 28%, 29%)";
// Dark Theme
const color_dark_bg = "hsl(220, 11%, 11%)";
const color_dark_contrast_lower = "hsl(220, 9%, 14%)";
const color_dark_contrast_low = "hsl(216, 4%, 23%)";
const color_dark_contrast_medium = "hsl(216, 3%, 29%)";
const color_dark_contrast_high = "hsl(210, 2%, 50%)";
const color_dark_contrast_higher = "hsl(0, 0%, 100%)";

export const muiPaletteLight = {
	primary: { main: color_primary },
	secondary: { main: color_secondary },
	info: { main: color_info },
	success: { main: color_success },
	warning: { main: color_warning },
	error: { main: color_error },

	contrast: {
		lower: color_light_contrast_lower,
		low: color_light_contrast_low,
		medium: color_light_contrast_medium,
		high: color_light_contrast_high,
		higher: color_light_contrast_higher
	},

	text: {
		primary: color_light_contrast_higher,
		secondary: color_light_contrast_high,
		disabled: color_light_contrast_medium,
		hint: color_light_contrast_medium,
		icon: color_light_contrast_medium
	},

	divider: color_light_contrast_lower,

	background: {
		block: color_white,
		paper: color_light_contrast_lower,
		default: color_light_bg
	},

	action: {
		active: color_light_contrast_high,
		hover: color_light_contrast_medium,
		selected: color_light_contrast_low,
		disabled: color_light_contrast_medium,
		disabledBackground: color_light_contrast_lower
	}
};

export const muiPaletteDark = {
	primary: { main: color_primary },
	secondary: { main: color_secondary },
	info: { main: color_info },
	success: { main: color_success },
	warning: { main: color_warning },
	error: { main: color_error },

	contrast: {
		lower: color_dark_contrast_lower,
		low: color_dark_contrast_low,
		medium: color_dark_contrast_medium,
		high: color_dark_contrast_high,
		higher: color_dark_contrast_higher
	},

	text: {
		primary: color_dark_contrast_higher,
		secondary: color_dark_contrast_high,
		disabled: color_dark_contrast_medium,
		hint: color_dark_contrast_medium,
		icon: color_dark_contrast_medium
	},
	divider: color_dark_contrast_low,

	background: {
		block: color_dark_contrast_lower,
		paper: color_dark_contrast_lower,
		default: color_dark_bg
	},

	action: {
		active: color_dark_contrast_high,
		hover: color_dark_contrast_medium,
		selected: color_dark_contrast_low,
		disabled: color_dark_contrast_medium,
		disabledBackground: color_dark_contrast_lower
	}
};
