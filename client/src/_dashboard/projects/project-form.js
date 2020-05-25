import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { path_DASHBOARD } from "../../configs";
import { MoreAutocomplete } from "../../theme/@material-ui-custom";
import { Form, FieldArray, Field, FormikProvider } from "formik";
import {
  Box,
  Button,
  Divider,
  TextField,
  InputLabel,
  Typography,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";
import {
  Add,
  Edit,
  Delete,
  Category,
  FormatAlignLeft,
} from "@material-ui/icons";
import { UploadFile } from "../../commons";

function ProjectForm(props) {
  const { txtSubmit } = props;
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = props.formik;

  const categories = useSelector((state) =>
    state.categories.categories.map((item) => item.name)
  );

  const isLoading = useSelector((state) => state.projects.loading);

  return (
    <FormikProvider value={props.formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/********** NAME ***********/}
        <Box mt={3} mb={2}>
          <FormControl
            error={touched.name && errors.name ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Edit fontSize="small" />
                </InputAdornment>
              }
              labelWidth={48}
            />
            <FormHelperText>{touched.name ? errors.name : ""}</FormHelperText>
          </FormControl>
        </Box>

        {/********** DESCRIPTION ***********/}
        <Box mb={2}>
          <FormControl
            error={touched.description && errors.description ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              id="description"
              multiline
              name="description"
              value={values.description}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <FormatAlignLeft />
                </InputAdornment>
              }
              labelWidth={92}
            />
            <FormHelperText>
              {touched.description ? errors.description : ""}
            </FormHelperText>
          </FormControl>
        </Box>

        {/********** CATEGORY ***********/}
        <Box mb={2}>
          <Field
            value={values.category}
            openOnFocus
            autoHighlight
            name="category"
            disableClearable
            icon={<Category />}
            options={categories}
            component={MoreAutocomplete}
            getOptionLabel={(option) => option}
            // getOptionSelected={(option, value) => option[4] === value[4]}
            closeIcon={<Delete fontSize="small" />}
            textFieldProps={{
              variant: "outlined",
              label: "Category",
            }}
          />
        </Box>

        {/* EXAMPLE USE SELECT */}
        {/* <FormControl variant="outlined" fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <MoreSelect
              id="category"
              labelId="category"
              name="category"
              value={values.category || ""}
              onChange={handleChange}
              label="Category"
              options={categories}
              startAdornment={
                <InputAdornment position="start">
                  <Category />
                </InputAdornment>
              }
            />
          </FormControl> */}

        {/********** THUMBNAIL ***********/}
        <Box mb={2}>
          <UploadFile
            label="Thumbnail"
            cloudfiles={values.thumbnail}
            cloudfolder="upload_portfolio/projects"
            setCloudFiles={(value) => setFieldValue("thumbnail", value)}
          />
        </Box>

        {/********** HERO ***********/}
        <Box mb={2}>
          <UploadFile
            label="Hero"
            cloudfiles={values.hero}
            cloudfolder="upload_portfolio/projects"
            setCloudFiles={(value) => setFieldValue("hero", value)}
          />
        </Box>

        {/********** IMAGES ***********/}
        <Box mb={2}>
          <UploadFile
            multiple
            label="Images"
            cloudfiles={values.imglist}
            cloudfolder="upload_portfolio/projects"
            setCloudFiles={(value) => setFieldValue("imglist", value)}
          />
        </Box>

        {/********** VIDEOS ***********/}
        <Box mb={2}>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            gutterBottom
          >
            Videos
          </Typography>

          <FieldArray
            name="videolist"
            render={(arrayHelpers) => (
              <Box display="flex" alignItems="flex-start">
                <Box mr={2} flexShrink={0}>
                  <IconButton
                    className="_primary"
                    onClick={() =>
                      arrayHelpers.push({
                        thumbnail: "",
                        url: "",
                      })
                    }
                    aria-label="add input"
                  >
                    <Add />
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
                          id={`thumbnail[${index}]`}
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
                            id={`url[${index}]`}
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
                            onClick={() => arrayHelpers.remove(index)}
                            aria-label="remove input"
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                </Box>
              </Box>
            )}
          />
        </Box>

        {/********** FOOTER ***********/}
        <Divider />
        <Box mt={3} textAlign="right" display="flex" justifyContent="flex-end">
          <Box mr={2}>
            <Button
              color="primary"
              component={Link}
              to={path_DASHBOARD.root}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </Box>

          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={isLoading}
            startIcon={
              isLoading ? (
                <CircularProgress size={24} thickness={4} color="inherit" />
              ) : (
                ""
              )
            }
          >
            {isLoading ? "Please wait..." : txtSubmit}
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
}

export default ProjectForm;
