import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { Container, Box, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../configs";
import { SnackStatus } from "../@material-ui-custom";
import { HeaderDashboard, CheckLogin, PanelDashBoard } from "../commons";
import { CategoryList } from ".";

const CategoryPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);

  // GET CATEGORIES
  useEffect(() => {
    const getCategories = async () => {
      await API.get("categories")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          SnackStatus(enqueueSnackbar, {
            message: "Cannot connect to the server!",
            variant: "error",
          });
        });
    };
    getCategories();
  }, [enqueueSnackbar]);

  // DELETE CATEGORY
  const deleteCategory = async (id) => {
    await API.delete(`categories/${id}`)
      .then((res) => {
        setCategories(categories.filter((item) => item._id !== id));
        SnackStatus(enqueueSnackbar, {
          message: "Deleted success!",
          variant: "success",
        });
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Deleted error!",
          variant: "error",
        });
      });
  };

  return (
    <CheckLogin>
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
            <CategoryList
              stateCategories={categories}
              deleteCategory={deleteCategory}
            />
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
    </CheckLogin>
  );
};

export default CategoryPage;
