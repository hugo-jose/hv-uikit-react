import * as React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Play,
  Pause,
  Stop,
  Favorite,
  Refresh,
  Delete,
  MoreOptionsVertical,
} from "@hv/uikit-react-icons";
import { HvButton } from "../..";

export default {
  title: "Components/Button",
  parameters: {
    componentSubtitle: null,
    v3: true,
    usage: "import { HvButton } from '@hv/uikit-react-core/dist'",
  },
  component: HvButton,
};

export const Main = () => (
  <>
    <HvButton category="primary">Primary</HvButton>
    <HvButton category="secondary">Secondary</HvButton>
    <HvButton category="ghost">Ghost</HvButton>
    <HvButton category="semantic">Semantic</HvButton>
  </>
);

Main.story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: 400,
          justifyContent: "space-between",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const DisabledButtons = () => (
  <>
    <HvButton onClick={() => alert("This can't be triggered")} disabled category="primary">
      Primary
    </HvButton>
    <HvButton onClick={() => alert("This can't be triggered")} disabled category="secondary">
      Secondary
    </HvButton>
    <HvButton onClick={() => alert("This can't be triggered")} disabled category="ghost">
      Ghost
    </HvButton>
    <HvButton onClick={() => alert("This can't be triggered")} disabled category="semantic">
      Semantic
    </HvButton>
  </>
);

DisabledButtons.story = {
  parameters: {
    docs: {
      storyDescription: "Disabled buttons that don't allow any interaction.",
    },
    v3: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: 400,
          justifyContent: "space-between",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export const SemanticWithIcons = () => {
  const useStyles = makeStyles(() => ({
    spacing: {
      backgroundColor: "#D3E3F6",
      display: "inline-flex",
      padding: 20,
      "& > button": {
        marginRight: 10,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.spacing}>
      <HvButton category="semantic" startIcon={<Favorite />} aria-label="Favorite">
        Favorite
      </HvButton>
      <HvButton category="semantic" startIcon={<Refresh />} aria-label="Refresh">
        Refresh
      </HvButton>
      <HvButton category="semantic" startIcon={<Delete />} aria-label="Delete">
        Delete
      </HvButton>
      <HvButton icon category="semantic" aria-label="More options">
        <MoreOptionsVertical />
      </HvButton>
    </div>
  );
};

export const Icons = () => {
  const useStyles = makeStyles(() => ({
    spacing: {
      "& > button": {
        margin: 10,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.spacing}>
      <HvButton icon aria-label="Play">
        <Play />
      </HvButton>
      <HvButton icon aria-label="Pause">
        <Pause />
      </HvButton>
      <HvButton icon aria-label="Stop">
        <Stop />
      </HvButton>
      <br />
      <HvButton startIcon={<Play />} category="ghost" aria-label="Play">
        Play
      </HvButton>
      <HvButton startIcon={<Pause />} category="ghost" aria-label="Pause">
        Pause
      </HvButton>
      <HvButton startIcon={<Stop />} category="ghost" aria-label="Stop">
        Stop
      </HvButton>
    </div>
  );
};

Icons.story = {
  parameters: {
    docs: {
      storyDescription: "Various Button configurations with icons and icons + text.",
    },
    v3: true,
  },
};
