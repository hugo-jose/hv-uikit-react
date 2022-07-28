import React from "react";

import { HvTypography } from "@hitachivantara/uikit-react-core";

import { HvImageCarousel } from "../..";

import DarthVader from "./resources/DarthVader.jpg";
import BobaFett from "./resources/BobaFett.jpg"
import Revan from "./resources/Revan.jpg"
import TheMandalorian from "./resources/TheMandalorian.jpg"
import Anakin from "./resources/AnakinSkywalker.jpg"
import Ahsoka from "./resources/Ahsoka.jpg"
import ObiWan from "./resources/ObiWan.png"
import Mace from "./resources/MaceWindu.jpg"
import Yoda from "./resources/Yoda.jpg"

export default {
  title: "Lab/ImageCarousel",
  parameters: {
    componentSubtitle: null,
    usage: "import { HvImageCarousel } from '@hitachivantara/uikit-react-lab'",
  },
  component: HvImageCarousel,
};

export const Main = () => {
  const images = [
   {src: DarthVader, value: "DarthVader"},
   {src: BobaFett, value: "BobaFett"},
   {src: Revan, value: "Revan"},
   {src: TheMandalorian, value: "TheMandalorian"},
   {src: Anakin, value: "Anakin"},
   {src: Ahsoka, value: "Ahsoka"},
   {src: ObiWan, value: "ObiWan"},
   {src: Mace, value: "Mace"},
   {src: Yoda, value: "Yoda"}
  ];

  const title= <HvTypography paragraph variant="normalText">Title</HvTypography>

  return <HvImageCarousel documents={images} title={title} tumbnails lowCardinality infiniteCarousel/>
};
