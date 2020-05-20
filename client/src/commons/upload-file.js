import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import { FilePond, registerPlugin } from "react-filepond";
// import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
  // FilePondPluginFileEncode
);

const useStyles = makeStyles((theme) => ({
  commons: {
    "& .filepond--panel-root": {
      backgroundColor: theme.palette.contrast.lower,
      borderRadius: theme.shape.borderRadius,
      background: "green",
      overflow: "hidden",
    },
    "& .filepond--drop-label": {
      color: theme.palette.contrast.medium,
    },

    // ITEM
    "& .filepond--item-panel": {
      borderRadius: theme.shape.borderRadiusXs,
      overflow: "hidden",
    },
    "& .filepond--image-preview-wrapper": {
      borderRadius: theme.shape.borderRadius,
    },

    // Status
    "& .filepond--image-preview-overlay-success": {
      color: theme.palette.success.main,
    },
    "& .filepond--image-preview-overlay-failure": {
      color: theme.palette.error.main,
    },
    "& [data-filepond-item-state*=error] .filepond--item-panel, [data-filepond-item-state*=invalid] .filepond--item-panel": {
      backgroundColor: theme.palette.error.main,
    },
  },

  multiple: {
    "& .filepond--item": {
      width: `calc((100%/3) - ${theme.spacing(1)}px)`,
    },

    single: {
      "& .filepond--item": {
        width: "100%",
      },
    },
  },
}));

function UploadFile(props) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle2" paragraph>
        {props.label}
      </Typography>

      <FilePond
        className={`${classes.root} ${
          props.allowMultiple ? classes.multiple : classes.single
        } `}
        {...props}
        server={{
          // url: "http://localhost:5000/api/categories",
          process: (fieldName, file, metadata, load) => {
            setTimeout(() => {
              load(Date.now());
            }, 800);
          },

          // load: (url, load) => {
          //   fetch(url)
          //     .then((res) => res.blob())
          //     .then(load);
          // },

          // remove: (source, load, error) => {
          //   error("oh my goodness");
          //   load();
          // },
        }}
        // checkValidity
        // allowReplace
        // imagePreviewHeight="100"
        // files={values.imgCollection}
        // allowMultiple={true}
        // server={{
        //   process: (fieldName, file, metadata, load) => {
        //     setTimeout(() => {
        //       load(Date.now());
        //     }, 800);
        //   },
        //   load: (url, load) => {
        //     fetch(url)
        //       .then((res) => console.log(res.blob()))
        //       .then(load);
        //   },
        // }}

        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </>
  );
}

export default UploadFile;
