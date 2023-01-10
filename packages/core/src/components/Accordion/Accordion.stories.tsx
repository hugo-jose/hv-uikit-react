import { Meta, StoryObj } from "@storybook/react";
import {
  Breakpoint,
  HvBox,
  HvButton,
  HvSimpleGrid,
  HvTypography,
} from "components";
import { useState } from "react";
import { HvAccordionProps, HvAccordion } from "./Accordion";

const meta: Meta<typeof HvAccordion> = {
  title: "Display/Accordion",
  component: HvAccordion,
};
export default meta;

export const Main: StoryObj<HvAccordionProps> = {
  args: {
    label: "Analytics",
    headingLevel: 1,
    disabled: false,
  },
  render: ({ label, headingLevel, disabled }) => {
    return (
      <HvBox sx={{ maxWidth: 300 }}>
        <HvAccordion
          id="item1"
          label={label}
          headingLevel={headingLevel}
          disabled={disabled}
        >
          <HvTypography>item 1</HvTypography>
        </HvAccordion>
        <HvAccordion id="item2" label="System" headingLevel={headingLevel}>
          <HvTypography>item 2</HvTypography>
        </HvAccordion>
        <HvAccordion id="item3" label="Data" headingLevel={headingLevel}>
          <HvTypography>item 2</HvTypography>
        </HvAccordion>
      </HvBox>
    );
  },
};

export const Disabled: StoryObj<HvAccordionProps> = {
  render: ({}) => {
    return (
      <HvBox sx={{ maxWidth: 300 }}>
        <HvAccordion id="item1" label="Analytics" headingLevel={3} disabled>
          <HvTypography>item 1</HvTypography>
        </HvAccordion>
        <HvAccordion id="item2" label="System" headingLevel={3}>
          <HvTypography>item 2</HvTypography>
        </HvAccordion>
        <HvAccordion id="item3" label="Data" headingLevel={3} disabled>
          <HvTypography>item 2</HvTypography>
        </HvAccordion>
      </HvBox>
    );
  },
};

export const Controlled: StoryObj<HvAccordionProps> = {
  render: ({}) => {
    const [expandedState, setExpandedState] = useState({
      analytics: true,
      system: true,
      data: true,
    });
    const handleToggle = (key) => {
      const newValue = { ...expandedState };
      newValue[key] = !newValue[key];
      setExpandedState(newValue);
    };
    const handleAll = (option) => {
      setExpandedState({ analytics: option, system: option, data: option });
    };

    const brk: Breakpoint[] = [
      {
        cols: 5,
        minWidth: 680,
        spacing: "sm",
      },
      {
        cols: 3,
        minWidth: 500,
        spacing: "sm",
      },
      {
        cols: 2,
        minWidth: 450,
        spacing: "sm",
      },
      {
        cols: 1,
        minWidth: 100,
        spacing: "sm",
      },
    ];

    return (
      <>
        <HvSimpleGrid
          cols={5}
          spacing="sm"
          style={{ maxWidth: 700 }}
          breakpoints={brk}
        >
          <HvButton
            variant="secondary"
            onClick={() => handleToggle("analytics")}
          >
            Toggle Analytics
          </HvButton>
          <HvButton variant="secondary" onClick={() => handleToggle("system")}>
            Toggle System
          </HvButton>
          <HvButton variant="secondary" onClick={() => handleToggle("data")}>
            Toggle Data
          </HvButton>
          <HvButton variant="secondary" onClick={() => handleAll(false)}>
            Close all
          </HvButton>
          <HvButton variant="secondary" onClick={() => handleAll(true)}>
            Expand all
          </HvButton>
        </HvSimpleGrid>
        <HvBox sx={{ maxWidth: 300 }}>
          <HvAccordion
            id="controlled-item1"
            label="Analytics"
            onChange={() => handleToggle("analytics")}
            expanded={expandedState.analytics}
          >
            <HvTypography>item 1</HvTypography>
          </HvAccordion>
          <HvAccordion
            id="controlled-item2"
            label="System"
            onChange={() => handleToggle("system")}
            expanded={expandedState.system}
          >
            <HvTypography>item 2</HvTypography>
          </HvAccordion>
          <HvAccordion
            id="controlled-item3"
            label="Data"
            onChange={() => handleToggle("data")}
            expanded={expandedState.data}
          >
            <HvTypography>item 3</HvTypography>
          </HvAccordion>
        </HvBox>
      </>
    );
  },
};
