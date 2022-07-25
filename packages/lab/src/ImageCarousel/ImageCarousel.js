import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { withStyles } from "@material-ui/core";
import { HvButton, HvContainer, HvTypography, HvGrid, HvStack } from "@hitachivantara/uikit-react-core";
import { Backwards, Forwards } from "@hitachivantara/uikit-react-icons";

import styles from "./styles";
/**
 * ImageCarousel description/documentation paragraph
 */
const HvImageCarousel = (props) => {
  const { className, classes, documents, ...others } = props;
  
  const [selImage, setImage] = React.useState(0);

  const nextImage = () => {
    if(selImage !== documents.length - 1)
      setImage(selImage + 1)
    else
      setImage(0);
  };

  const previousImage = () => {
    if(selImage !== 0)
      setImage(selImage - 1);
    else
      setImage(documents.length - 1);
  };
  
  const styleThumbnail = (id) => {
    if(id !== selImage)
      return classes.img
    return classes.thumbnailSelected
  }

  return (
    <HvContainer className={clsx(className, classes.root)} {...others}>
      <div align="middle">
        <HvTypography paragraph variant="normalText">{["Image ", selImage + 1]}</HvTypography>
        <img className={classes.selectedImage} src={documents[selImage][0]} alt={documents[selImage][1]}/>
      </div>
      <div>
        <HvGrid container justify="space-between" alignItems="center">
          <HvGrid item>
            <HvButton icon aria-label="Backwards" onClick={() => previousImage()}><Backwards/></HvButton>
          </HvGrid>
          <HvGrid item alignItems="center">
            <HvTypography variant="highlightText" component="a">{selImage + 1}</HvTypography>
            <HvTypography variant="normalText" component="a" >{["/", documents.length]}</HvTypography>
          </HvGrid>
          <HvGrid item>
            <HvButton icon aria-label="Forwards" onClick={() => nextImage()}><Forwards/></HvButton>
          </HvGrid>
        </HvGrid>
      </div>
      <div className={classes.root}>
        <HvStack direction="row" spacing="xs" withNavigation >
          {documents.map((element, i) => (
          <HvButton className={classes.inputImage} variant="semantic" onClick={() => setImage(i)}>  
            <img className={styleThumbnail(i)} src={element[0]} alt={element[1]}/>
          </HvButton>
          ))}
        </HvStack>
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
  }).isRequired,
    /**
    * Styles applied to the component SelectedImage.
    */
    documents: PropTypes.string.isRequired,  
};

export default withStyles(styles, { name: "HvImageCarousel" })(HvImageCarousel);
