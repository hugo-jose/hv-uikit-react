import React from "react";

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
   [DarthVader, "DarthVader"],
   [BobaFett, "BobaFett"],
   [Revan, "Revan"],
   [TheMandalorian, "TheMandalorian"],
   [Anakin, "Anakin"],
   [Ahsoka, "Ahsoka"],
   [ObiWan, "ObiWan"],
   [Mace, "Mace"],
   [Yoda, "Yoda"]
  ];
  return <HvImageCarousel documents={images} />
};
