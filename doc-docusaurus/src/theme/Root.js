/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React from "react";
// Default implementation, that you can customize
// eslint-disable-next-line import/no-extraneous-dependencies
import { HvProvider } from "@hitachivantara/uikit-react-core";

import App from "@site/src/components/App/index";

export default function Root({ children }) {
  return (
    <HvProvider uiKitTheme="dawn" generateClassNameOptions={{ seed: "dawn" }} disableCssBaseline>
      <App children={children} />
    </HvProvider>
  );
}
