/* eslint-disable no-alert */
import React, { useState } from "react";
import { HvButton, HvSlider } from "../..";

export default {
  title: "Tests/Slider",
  parameters: {
    docs: {
      disable: true,
      page: null,
    },
  },
};

export const ThreeKnobs = () => {
  const threeKnobProperties = [
    {
      color: "#72cccb",
      dragColor: "#96d9d8",
      trackColor: "#72cccb",
    },
    {
      color: "#f9dc37",
      dragColor: "#fbe56a",
      trackColor: "#f9dc37",
    },
    {
      color: "#ff9100",
      dragColor: "#ffa733",
      trackColor: "#ff9100",
    },
  ];

  const threeKnobPropertiesDefaults = [10, 20, 30];

  return (
    <HvSlider
      markStep={10}
      knobProperties={threeKnobProperties}
      defaultValues={threeKnobPropertiesDefaults}
    />
  );
};

ThreeKnobs.parameters = {
  docs: {
    description: {
      story: "Three knobs. Shows the possibility of manipulating N quantity of knobs and a range",
    },
  },
};

export const ThreeKnobsWithColors = () => {
  const threeKnobFixedProperties = [
    {
      color: "yellow",
      dragColor: "black",
      trackColor: "red",
    },
    {
      color: "red",
      dragColor: "grey",
      trackColor: "grey",
    },
    {
      color: "purple",
      dragColor: "orange",
      trackColor: "yellow",
      fixed: true,
    },
  ];

  const threeKnobFixedPropertiesDefaults = [10, 50, 80];

  return (
    <HvSlider
      markStep={10}
      knobProperties={threeKnobFixedProperties}
      defaultValues={threeKnobFixedPropertiesDefaults}
    />
  );
};

ThreeKnobsWithColors.parameters = {
  docs: {
    description: {
      story:
        "Three knobs with different color and different tracks. Shows the possibility manipulating the color of the knobs ",
    },
  },
};

export const KnobsOverlapping = () => {
  const scaledKnobProperties = [
    {
      color: "#72cccb",
      dragColor: "#96d9d8",
      defaultValue: 0.3,
    },
    {
      color: "#72cccb",
      dragColor: "#96d9d8",
      defaultValue: 0.5,
    },
  ];

  const scaledKnobPropertiesDefaults = [0.3, 0.5];

  return (
    <HvSlider
      markStep={10}
      knobProperties={scaledKnobProperties}
      defaultValues={scaledKnobPropertiesDefaults}
      minPointValue={0.1}
      maxPointValue={0.7}
      divisionQuantity={30}
      noOverlap={false}
      markDigits={2}
    />
  );
};

KnobsOverlapping.parameters = {
  docs: {
    description: {
      story:
        "Two knobs with overlapping and a fractional scale. Range from 0.10 to 0.70 with 30 points defined. Each point represents 0.02 units. ",
    },
  },
};

export const DifferentRanges = () => {
  const threeKnobProperties = [
    {
      color: "#72cccb",
      dragColor: "#96d9d8",
      trackColor: "#72cccb",
    },
    {
      color: "#f9dc37",
      dragColor: "#fbe56a",
      trackColor: "#f9dc37",
    },
    {
      color: "#ff9100",
      dragColor: "#ffa733",
      trackColor: "#ff9100",
    },
  ];

  const threeKnobPropertiesDefaults = [10, 20, 30];

  const ExtendedHvSlider = ({ knobPropertiesDefault, knobProperties }) => {
    const [knobsValues, setKnobValues] = useState(knobPropertiesDefault);

    return (
      <>
        <HvButton onClick={() => setKnobValues(knobPropertiesDefault)}>Reset</HvButton>
        <HvSlider
          markStep={10}
          knobProperties={knobProperties}
          values={knobsValues}
          defaultValues={knobPropertiesDefault}
          onChange={({ knobsValues: values }) => {
            setKnobValues(values);
          }}
        />
      </>
    );
  };

  return (
    <ExtendedHvSlider
      knobPropertiesDefault={threeKnobPropertiesDefaults}
      knobProperties={threeKnobProperties}
    />
  );
};

DifferentRanges.parameters = {
  docs: {
    description: {
      story:
        "Three knobs with different range. Shows the possibility of manipulating N quantity of knobs and a range. ",
    },
  },
};
