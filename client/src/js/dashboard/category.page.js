import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { Header } from "../commons";
import { CategoryList } from ".";
import { Container, Box, Typography, Button, Fab } from "@material-ui/core";
import { ArrowBack, Add } from "@material-ui/icons";
import { path_CATEGORIES, path_DASHBOARD } from "../../config";
import { SnackStatus } from "../@material-ui-custom";

const CategoryPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);

  // Get Email
  const getCategories = async () => {
    await axios
      .get("/api/categories")
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

  // Delete Email
  const deleteCategory = async (id) => {
    await axios
      .delete(`/api/categories/${id}`)
      .then((res) => {
        getCategories();

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
    setCategories(categories.filter((item) => item._id !== id));
  };

  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <Header />

      <Container>
        {/********** Panel ***********/}
        <Box mt={24} mb={8}>
          <Button
            to={path_DASHBOARD.root}
            size="small"
            color="primary"
            component={Link}
            startIcon={<ArrowBack />}
          >
            Back
          </Button>

          <Box>
            <Typography variant="h3" component="h1" paragraph>
              Category
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {categories.length} category
            </Typography>
          </Box>
        </Box>

        {/********** Email List ***********/}
        <CategoryList
          stateCategories={categories}
          deleteCategory={deleteCategory}
        />
        <Box height={160}></Box>
      </Container>

      <Box position="fixed" bottom={56} right={56} zIndex="mobileStepper">
        <Fab
          color="primary"
          component={Link}
          to={path_CATEGORIES.create}
          aria-label="add"
        >
          <Add />
        </Fab>
      </Box>
    </motion.div>
  );
};

export default CategoryPage;
