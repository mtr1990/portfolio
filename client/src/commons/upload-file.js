import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Box, makeStyles, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Spinners } from ".";

function MyDropzone(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(null);
  const { cloudfiles, cloudfolder, setCloudFiles, multiple, label } = props;

  const onDrop = (files) => {
    setIsLoading(true);
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", cloudfolder);
      formData.append("api_key", process.env.REACT_APP_CLOUDINARY_KEY);
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
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
  };

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: "image/*",
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
          size="small"
          aria-label="delete"
          onClick={removeFile(item)}
          className={classes.thumb_remove}
        >
          <Delete />
        </IconButton>
      </Box>
    );
  });

  return (
    <>
      <Box>
        <Typography variant="subtitle2" paragraph>
          {label}
        </Typography>
      </Box>
      <Box className={classes.wrap}>
        <div {...getRootProps()} className={classes.input}>
          <input {...getInputProps()} />
          {isDragReject ? (
            <Typography variant="subtitle2" color="textSecondary">
              File type not accepted, sorry!
            </Typography>
          ) : (
            <Typography variant="subtitle2" color="textSecondary">
              Drag 'n' drop some files here, or click to select files
            </Typography>
          )}
        </div>
        {isLoading ? (
          <Box height={160} position="relative">
            <Spinners index={999} />
          </Box>
        ) : (
          <Box className={classes.thumbs}>{thumb}</Box>
        )}
      </Box>
    </>
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
    paddingTop: theme.spacing(2),
  },
  thumb: {
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    height: theme.spacing(24),
    margin: theme.spacing(1 ),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.contrast.lower,
    boxShadow: theme.shadows[12],
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
    width: `calc((100%/4) - ${theme.spacing(1)}px)`,
  },
  thumb_remove: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 99,
  },
  input: {
    cursor: "grab",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `dashed 1px ${theme.palette.contrast.high}`,
    "&:focus": {
      outline: "none",
      border: `dashed 1px ${theme.palette.contrast.higher}`,
    },
  },
}));
