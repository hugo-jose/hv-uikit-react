const styles = (theme) => ({
  root: {
    background: theme.hv.palette.atmosphere.atmo1,
    overflowX: "hidden",
  },
  selectedImage:{
    width: "400px",
    height: "400px",
    textAlign: "center",
    // Handle non-square image. The property isn't supported by IE 11.
    objectFit: "fill",
    // Hide alt text.
    color: "transparent",
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000,
  },
  img:{
    width: "150px",
    height: "100px",
    textAlign: "center",
    // Handle non-square image. The property isn't supported by IE 11.
    objectFit: "fill",
    // Hide alt text.
    color: "transparent",
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000,
    borderRadius: "10px",
  },
  thumbnailSelected:{
    width: "150px",
    height: "100px",
    textAlign: "center",
    // Handle non-square image. The property isn't supported by IE 11.
    objectFit: "fill",
    // Hide alt text.
    color: "transparent",
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000,
    borderRadius: "10px",
    borderStyle: "solid",
    borderColor: theme.hv.palette.base.base2,
    opacity: "50%",
  },
  inputImage:{
    width: "auto",
    height: "auto",
    padding: "0px 0px",
  }
});

export default styles;
