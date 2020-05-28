import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Box, makeStyles, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Spinners } from ".";
// import { iUploading } from "../assets";

function MyDropzone(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(null);
  const {
    multiple,
    required,
    labelText,
    labelIcon,
    cloudfiles,
    cloudfolder,
    setCloudFiles,
  } = props;

  const maxSize = 1048576 * 3;

  const onDrop = useCallback(
    (files) => {
      setIsLoading(true);
      const uploaders = files.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", cloudfolder);
        formData.append("api_key", process.env.REACT_APP_CLOUDINARY_KEY);
        formData.append(
          "upload_preset",
          process.env.REACT_APP_CLOUDINARY_PRESET
        );
        return axios
          .post(process.env.REACT_APP_CLOUDINARY_URL, formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          })
          .then((response) => {
            const data = response.data;
            return {
              public_id: data.public_id,
              url: data.secure_url,
            };
          });
      });
      axios.all(uploaders).then((values) => {
        setCloudFiles(values);
        setIsLoading(false);
      });
    },
    [cloudfolder, setCloudFiles]
  );

  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize,
    multiple: multiple ? true : false,
  });

  const removeFile = (file) => () => {
    const newFiles = [...cloudfiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setCloudFiles(newFiles);
  };

  const thumb = cloudfiles.map((item, index) => {
    return (
      <Box
        key={index}
        className={
          multiple
            ? `${classes.thumb} ${classes.thumb_multiple}`
            : classes.thumb
        }
      >
        <img src={item.url} alt={item.url} />

        <IconButton
          className={classes.thumb_remove}
          size="small"
          aria-label="delete"
          onClick={removeFile(item)}
        >
          <Delete />
        </IconButton>
      </Box>
    );
  });

  return (
    <Box mb={3}>
      {/********** LABEL ***********/}
      <Box className={classes.label}>
        {labelIcon}
        <Typography variant="subtitle2">{labelText}</Typography>
      </Box>

      {/********** INPUT ***********/}
      <Box className={classes.wrap}>
        <Box {...getRootProps()} className={classes.input}>
          <input {...getInputProps()} />
          {isDragAccept && (
            <Typography variant="subtitle2" color="textSecondary">
              All files will be accepted
            </Typography>
          )}
          {isDragReject && (
            <Typography variant="subtitle2" color="textSecondary">
              File type not accepted, sorry!
            </Typography>
          )}
          {!isDragActive && (
            <Typography variant="subtitle2" color="textSecondary">
              Drag 'n' drop some files here, or click to select files
            </Typography>
          )}
        </Box>

        {/********** LIST ***********/}
        {isLoading ? (
          <Box height={160} position="relative">
            <Spinners index={99} />
          </Box>
        ) : (
          // <img src={iUploading} alt="Go to about me" />
          <Box className={classes.thumbs}>{thumb}</Box>
        )}
      </Box>

      {/********** STATUS ***********/}
      <Box className={classes.helpertext}>
        <Typography variant="caption" color="error">
          {required}
        </Typography>
      </Box>
    </Box>
  );
}

export default MyDropzone;

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.bound,
  },
  thumbs: {
    display: "flex",
    flexWrap: "wrap",
  },
  thumb: {
    overflow: "hidden",
    position: "relative",
    margin: theme.spacing(1),
    height: theme.spacing(24),
    boxShadow: theme.shadows[12],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.contrast.lower,
    width: "100%",
    "&::before": {
      content: '" "',
      opacity: 0,
      zIndex: 98,
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.64)",
      transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
    },
    "&:hover": {
      "&::before": {
        opacity: 1,
      },
    },
    "& img": {
      height: "100%",
      objectFit: "cover",
    },
  },
  thumb_multiple: {
    width: `calc((100%/4) - ${theme.spacing(2)}px)`,
  },
  thumb_remove: {
    zIndex: 99,
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  label: {
    display: "flex",
    marginBottom: theme.spacing(1),
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },
  input: {
    cursor: "grab",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    "&:focus": {
      outline: "none",
    },
  },
  helpertext: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
}));
