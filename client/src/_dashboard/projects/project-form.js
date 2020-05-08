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
  Image,
  Delete,
  Airplay,
  Category,
  FormatAlignLeft,
} from "@material-ui/icons";

function ProjectForm(props) {
  const { txtSubmit } = props;
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props.formik;

  const categories = useSelector((state) =>
    state.categories.categories.map((item) => item.name)
  );

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

        {/********** THUMBNAIL ***********/}
        <Box mb={2}>
          <FormControl
            error={touched.thumbnail && errors.thumbnail ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="thumbnail">Thumbnail</InputLabel>
            <OutlinedInput
              id="thumbnail"
              name="thumbnail"
              value={values.thumbnail}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Image />
                </InputAdornment>
              }
              labelWidth={84}
            />
            <FormHelperText>
              {touched.thumbnail ? errors.thumbnail : ""}
            </FormHelperText>
          </FormControl>
        </Box>

        {/********** HERO ***********/}
        <Box mb={2}>
          <FormControl
            error={touched.hero && errors.hero ? true : false}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="hero">Hero</InputLabel>
            <OutlinedInput
              id="hero"
              name="hero"
              value={values.hero}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Airplay />
                </InputAdornment>
              }
              labelWidth={40}
            />
            <FormHelperText>{touched.hero ? errors.hero : ""}</FormHelperText>
          </FormControl>
        </Box>

        {/********** CATEGORY ***********/}
        <Box mb={2}>
          <Field
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

          {/* EXAMPLE USE SELECT */}
          {/* <FormControl variant="outlined" fullWidth>
        <InputLabel id="category">Category</InputLabel>
        <MoreSelect
          id="category"
          labelId="category"
          name="category"
          value={values.category}
          onChange={handleChange}
          label="Category"
          options={values.categories}
          startAdornment={
            <InputAdornment position="start">
              <Category />
            </InputAdornment>
          }
        />
      </FormControl> */}
        </Box>

        {/********** IMAGES ***********/}
        <Box mb={2}>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            gutterBottom
          >
            Images
          </Typography>
          <FieldArray
            name="imglist"
            render={(arrayHelpers) => (
              <Box display="flex" alignItems="flex-start">
                <Box mr={2} flexShrink={0}>
                  <IconButton
                    className="_primary"
                    onClick={() => arrayHelpers.push("")}
                    aria-label="add input"
                  >
                    <Add />
                  </IconButton>
                </Box>

                <Box width="100%">
                  {values.imglist &&
                    values.imglist.map((img, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        mb={1}
                      >
                        <TextField
                          id={`img[${index}]`}
                          fullWidth
                          size="small"
                          variant="outlined"
                          label={`img ${index + 1}`}
                          name={`imglist[${index}]`}
                          value={img}
                          onChange={handleChange}
                        />

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
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </Box>

          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? (
                <CircularProgress size={24} thickness={4} color="inherit" />
              ) : (
                ""
              )
            }
          >
            {isSubmitting ? "Please wait..." : txtSubmit}
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
}

export default ProjectForm;
