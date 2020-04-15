import React from "react";
import { Form, FieldArray } from "formik";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  FormHelperText,
  FormControl,
  OutlinedInput,
  InputLabel,
  TextField,
  Typography,
  IconButton,
  Divider,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  Delete,
  Add,
  Edit,
  FormatAlignLeft,
  Image,
  Airplay,
  Category,
} from "@material-ui/icons";
import { path_DASHBOARD } from "../config";

const ProjectForm = ({
  values,
  isSubmitting,
  handleChange,
  txtSubmit,
  touched,
  errors,
}) => {
  return (
    <Form autoComplete="off" noValidate>
      {/********** Name ***********/}
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
                <Edit />
              </InputAdornment>
            }
            labelWidth={48}
          />
          <FormHelperText>{touched.name ? errors.name : ""}</FormHelperText>
        </FormControl>
      </Box>

      {/********** Description ***********/}
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

      {/********** Thumbnail ***********/}
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

      {/********** Hero ***********/}
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

      {/********** Category ***********/}
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="category">Category</InputLabel>
        <Select
          id="category"
          labelId="category"
          name="category"
          // value={values.category ? values.category : ""}
          value={values.category && values.category}
          onChange={handleChange}
          label="Category"
          startAdornment={
            <InputAdornment position="start">
              <Category />
            </InputAdornment>
          }
        >
          {values.categories &&
            values.categories.map((item, index) => {
              return (
                <MenuItem key={index} value={item} label={item}>
                  {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>

      {/********** Images ***********/}
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
                    <Box key={index} display="flex" alignItems="center" mb={1}>
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
                          <Delete />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}
        />
      </Box>

      {/********** Videos ***********/}
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
                    <Box key={index} display="flex" alignItems="center" mb={1}>
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
                          <Delete />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}
        />
      </Box>

      {/********** Footer ***********/}
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
  );
};

export default ProjectForm;
