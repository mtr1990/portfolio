import React from "react";
import { AnimatePresence } from "framer-motion";
import { Router, Switch, Route } from "react-router-dom";
import { routes, history } from "./configs";
import { Nprogress } from "./utilities";
import { ThemeWrap, SnackContainer } from "./styles/@material-ui-custom";

const App = () => (
  <ThemeWrap>
    <SnackContainer>
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
    </SnackContainer>
  </ThemeWrap>
);

export default App;
