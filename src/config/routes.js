// Client
import {
	HomePage,
	AboutPage,
	ProjectDetailsPage,
	NoMatchPage
} from "../js/client";

// Dashboard
import { LoginPage, EmailPage, ProjectPage } from "../js/dashboard";

// Guideline
import {
	GlColorPalettes,
	GlTypography,
	GlButtons,
	GlForms,
	GlToast,
	GlShadows
} from "../js/guideline";

const routes = [
	// Home
	{
		path: "/",
		exact: true,
		component: HomePage
	},
	// About
	{
		path: "/about",
		component: AboutPage
	},
	// Project Details
	{
		path: "/projects/:id",
		component: ProjectDetailsPage
	},
	// Login
	{
		path: "/login",
		component: LoginPage
	},
	// Dashboard
	{
		path: "/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBzl",
		component: ProjectPage
	},
	// Emails
	{
		path: "/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBz/email",
		exact: true,
		component: EmailPage
	},
	// Guideline Colors
	{
		path: "/guideline",
		exact: true,
		component: GlColorPalettes
	},
	// Guideline Typography
	{
		path: "/guideline/typography",
		component: GlTypography
	},
	// Guideline Button
	{
		path: "/guideline/buttons",
		component: GlButtons
	},
	// Guideline Forms
	{
		path: "/guideline/forms",
		component: GlForms
	},
	// Guideline Toast
	{
		path: "/guideline/toast",
		component: GlToast
	},
	// Guideline Shadows
	{
		path: "/guideline/shadows",
		component: GlShadows
	},
	// NoMatch
	{
		component: NoMatchPage
	}
];

export default routes;
