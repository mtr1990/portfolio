import React from "react";
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

function UploadFile(props) {
  return (
    <FilePond
      {...props}
      server={{
        // url: "http://localhost:2247/portfolio",
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
  );
}

export default UploadFile;
