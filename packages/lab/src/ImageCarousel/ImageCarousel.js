import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Button, makeStyles, withStyles } from "@material-ui/core";
import {
  HvButton,
  HvContainer,
  HvTypography,
  HvGrid,
  HvStack,
  HvPanel,
  useScrollTo,
} from "@hitachivantara/uikit-react-core";

import { Backwards, Forwards } from "@hitachivantara/uikit-react-icons";

import styles from "./styles";
/**
 * ImageCarousel description/documentation paragraph
 */
const HvImageCarousel = (props) => {
  const {
    className,
    classes,
    documents,
    title,
    fullscreen = false,
    thumbnails = false,
    lowCardinality = false,
    infiniteCarousel = false,
    ...others
  } = props;

  const [selImage, setImage] = React.useState(0);
  const [imageHover, setImageHover] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: theme.hv.palette.atmosphere.atmo3,
    },
    panel: {
      overflowX: "hidden",
      paddingLeft:"0px",
      paddingTop:"10px",
    },
    circles:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    }
  }));
  const style = useStyles();

  const [selectedIndex, setScrollTo] = useScrollTo(0, "Stack", false, 10, documents, false);

  const handleSelection = (event, value, index) => {
    event.preventDefault();
    setScrollTo(event, value, index);
  };

  const nextImage = () => {
    if (selImage !== documents.length - 1) setImage(selImage + 1);
    else if (infiniteCarousel) setImage(0);
  };

  const previousImage = () => {
    if (selImage !== 0) setImage(selImage - 1);
    else if (infiniteCarousel) setImage(documents.length - 1);
  };

  const styleThumbnail = (id) => {
    if (id !== selImage) return classes.img;
    return classes.thumbnailSelected;
  };

  const circleType = (index) => {
    if (index === selImage) return classes.selectedCircle;
    return classes.miniCircle;
  };

  return (
    <HvContainer
      className={clsx(className, classes.root, fullscreen ? "fullscreen" : "")}
      {...others}
    >
      {title}
      <div
        className={classes.imageContainer}
        onFocus
        onMouseOver={() => setImageHover(true)}
        onBlur
        onMouseOut={() => setImageHover(false)}
      >
        <img
          className={classes.selectedImage}
          src={documents[selImage].src}
          alt={documents[selImage].value}
        />
        {lowCardinality && (
          <div className={classes.lowButtons}>
              {(infiniteCarousel || selImage !== 0) && (
                <HvButton
                  className={imageHover ? style.button : ""}
                  icon
                  aria-label="Backwards"
                  onClick={() => previousImage()}
                >
                  <Backwards />
                </HvButton>
              )}
              {(infiniteCarousel || selImage !== documents.length - 1) && (
                <HvButton
                  className={imageHover ? style.button : ""}
                  icon
                  aria-label="Forwards"
                  onClick={() => nextImage()}
                >
                  <Forwards />
                </HvButton>
              )}
          </div>
        )}
      </div>
      {lowCardinality === false && (
        <HvGrid container justifyContent="space-between" alignItems="center">
          <HvGrid item>
            {(infiniteCarousel || selImage !== 0) && (
              <HvButton icon aria-label="Backwards" onClick={() => previousImage()}>
                <Backwards />
              </HvButton>
            )}
          </HvGrid>
          <HvGrid item>
            <HvTypography variant="highlightText" component="a">
              {selImage + 1}
            </HvTypography>
            <HvTypography variant="normalText" component="a">
              {["/", documents.length]}
            </HvTypography>
          </HvGrid>
          <HvGrid item>
            {(infiniteCarousel || selImage !== documents.length - 1) && (
              <HvButton icon aria-label="Forwards" onClick={() => nextImage()}>
                <Forwards />
              </HvButton>
            )}
          </HvGrid>
        </HvGrid>
      )}
      {lowCardinality && (
        <div className={style.circles}>
          {documents.map((element, index) => (
            <span className={circleType(index)} />
          ))}
        </div>
      )}
      <div className={classes.stack}>
        {thumbnails && (
          <HvPanel id="Stack" className={style.panel}>
            <HvStack direction="row" spacing="xs" withNavigation>
              {documents.map((element, i) => (
                <Button
                  id={element.value}
                  className={classes.inputImage}
                  variant="semantic"
                  onClick={(event) => {
                    setImage(i);
                    handleSelection(event, element.value, i, selectedIndex);
                  }}
                >
                  <img className={styleThumbnail(i)} src={element.src} alt={element.value} />
                </Button>
              ))}
            </HvStack>
          </HvPanel>
        )}
      </div>
    </HvContainer>
  );
};

HvImageCarousel.propTypes = {
  /**
   * Class names to be applied.
   */
  className: PropTypes.string,
  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the component root class.
     */
    root: PropTypes.string,
    /**
     * Styles applied to the component SelectedImage.
     */
    selectedImage: PropTypes.string,
    /**
     * Styles applied to the images displayed in thumbnail.
     */
    img: PropTypes.string,
    /**
     * Styles applied to the image selected in thumbnail.
     */
    thumbnailSelected: PropTypes.string,
    /**
     * Styles applied to the clickable images on the thumbnail.
     */
    inputImage: PropTypes.string,
    miniCircle: PropTypes.string,
    selectedCircle: PropTypes.string,
    buttonLow: PropTypes.string,
    lowButtons: PropTypes.string,
    imageContainer: PropTypes.string,
    stack: PropTypes.string,
  }).isRequired,
  /**
   * Documents to be displayed.
   */
  documents: PropTypes.array.isRequired,

  title: PropTypes.string,

  thumbnails: PropTypes.bool,

  lowCardinality: PropTypes.bool,
  infiniteCarousel: PropTypes.bool,
  /**
   * Set Image Carousel to fullscreen mode
   */
  fullscreen: PropTypes.bool,
};

export default withStyles(styles, { name: "HvImageCarousel" })(HvImageCarousel);
