const styles = (theme) => ({
  root: {
    background: theme.hv.palette.atmosphere.atmo1,
    alignContent:"flex-start",
    paddingTop:"20px",
    paddingBottom:"20px",
    width:"600px",
  },
  selectedImage:{
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "fill",
  },
  img:{
    width: "100%",
    height: "70px",
    textAlign: "center",
    objectFit: "fill",

  },
  thumbnailSelected:{
    width: "100%",
    height: "70px",
    textAlign: "center",
    objectFit: "fill",
    borderStyle: "solid",
    borderColor: theme.hv.palette.base.base2,
    opacity: "50%",
  },
  inputImage:{
    width: "110px",
    height: "70px",
    padding: "0px 0px",
  },
  miniCircle:{
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: theme.hv.palette.atmosphere.atmo4,
    display:"inline-block",
    margin:"10px",
  },
  selectedCircle:{
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: theme.hv.palette.atmosphere.atmo5,
    display:"inline-block",
    margin:"10px",
  },
  lowButtons:{
    width:"90%",
    display:"inline-flex",
    justifyContent:"space-between",
    position:"relative",
    bottom:"50%",
  },
  imageContainer:{
    marginTop:"20px",
    width:"100%",
    height:"400px",
    textAlign:"center",
    paddingBottom:"10px",
  },

  stack:{
    display:"flex",
    width:"100%",
    overflowX:"hidden",
    paddingTop:"10px",

  }
});

export default styles;
