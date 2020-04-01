import React from "react";
import { AnimatePresence } from "framer-motion";
import { Router, Switch, Route } from "react-router-dom";
import { routes, history } from "./config";
import { Nprogress } from "./js/utilities";
import { MsgContainer } from "./js/common";
import { ThemeWrap } from "./js/@material-ui-custom";

const App = () => (
	<ThemeWrap>
		<MsgContainer />

		<Router history={history}>
			<Route
				render={({ location }) => (
					<AnimatePresence exitBeforeEnter initial={true}>
						<Switch location={location} key={location.pathname}>
							{routes.map((route, i) => (
								<Nprogress key={i} {...route} />
							))}
						</Switch>
					</AnimatePresence>
				)}
			/>
		</Router>
	</ThemeWrap>
);

export default App;
