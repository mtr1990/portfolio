import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { path_DASHBOARD } from "../configs";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux";
import { Container, Box, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { HeaderDashboard, PanelDashBoard } from "../commons";
import { CategoryList } from "./categories";
import { LoginCheck } from "./login";

function CategoryPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  // GET CATEGORIES
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <LoginCheck>
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />

        <Box mb={24}>
          <Container>
            {/********** PANEL ***********/}
            <Box mb={8}>
              <PanelDashBoard
                txtHeading="Categories"
                txtSubHeading="category"
                numbLength={categories.length}
              />
            </Box>

            {/********** EMAIL LIST ***********/}
            <CategoryList />
            <Box height={160}></Box>
          </Container>
        </Box>

        <Box position="fixed" bottom={56} right={56} zIndex="mobileStepper">
          <Fab
            color="primary"
            component={Link}
            to={path_DASHBOARD.categories.create}
            aria-label="add category"
          >
            <Add />
          </Fab>
        </Box>
      </motion.div>
    </LoginCheck>
  );
}

export default CategoryPage;
