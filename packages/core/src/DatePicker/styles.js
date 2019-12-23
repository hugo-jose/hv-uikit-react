/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const inputRoot = theme => ({
  position: "relative",
  background: theme.hv.palette.atmosphere.atmo1,
  height: "32px",
  paddingLeft: `${theme.hv.spacing.xs}px`,
  paddingRight: `${theme.hv.spacing.md}px`,
  fontFamily: theme.hv.typography.fontFamily
});

const icon = {
  position: "absolute",
  right: 0,
  bottom: 0,
  width: "30px",
  height: "30px"
};

const styles = theme => ({
  inputCalendarClosed: {
    ...inputRoot(theme),
    border: `1px solid ${theme.hv.palette.atmosphere.atmo6}`
  },
  inputCalendarOpen: {
    ...inputRoot(theme),
    boxShadow: `0 2px 12px rgba(65,65,65,.12)`,
    border: `1px solid ${theme.hv.palette.atmosphere.atmo1}`
  },
  noBorderTop: {
    borderTop: "none"
  },
  noBorderBottom: {
    borderBottom: "none"
  },
  input: {
    border: "none",
    height: "30px",
    width: "100%",
    background: "transparent",
    fontFamily: theme.hv.typography.fontFamily,
    ...theme.hv.typography.normalText,
    "&:focus": {
      outline: "none"
    },
    "&::placeholder": {
      fontFamily: theme.hv.typography.fontFamily,
      ...theme.hv.typography.normalText,
      color: theme.hv.typography.disabledText.color
    }
  },
  icon: {
    ...icon,
    cursor: "pointer"
  },
  iconClear: {
    ...icon,
    cursor: "pointer"
  },
  datePickerContainer: {
    position: "relative",
    width: "320px"
  },
  label: {
    marginBottom: `${theme.hv.spacing.xs}px`,
    display: "block"
  },
  calendarContainer: {
    backgroundColor: `${theme.hv.palette.atmosphere.atmo1}`,
    width: "320px"
    // display: "flex",
    // flexDirection: "column",
    // boxShadow: `0 2px 12px rgba(65,65,65,.12)`
  },
  singleCalendarFooter: {
    padding: `${theme.hv.spacing.sm}px`,
    textAlign: "right",
    borderTop: `3px solid ${theme.hv.palette.atmosphere.atmo2}`
  },
  rangeMainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: `${theme.hv.palette.atmosphere.atmo1}`,
    // boxShadow: `0 2px 12px rgba(65,65,65,.12)`,
    width: "640px"
  },
  rangeCalendarsContainer: {
    display: "flex",
    flexDirection: "row"
  },
  rangeLeftCalendarContainer: {
    width: "50%"
  },
  rangeRightCalendarContainer: {
    width: "50%"
  },
  rangeCalendarsFooter: {
    display: "flex",
    flexDirection: "row",
    borderTop: `3px solid ${theme.hv.palette.atmosphere.atmo2}`
  },
  rangeFooterLeft: {
    width: "50%"
  },
  rangeFooterRight: {
    width: "50%",
    textAlign: "right",
    padding: `${theme.hv.spacing.sm}px`
  },
  actionsContainer: {
    textAlign: "right"
  },
  borderTopNone: {
    borderTop: "none"
  },
  borderBottomNone: {
    borderBottom: "none"
  },
  borderTopDisplay: {
    borderTop: `1px solid ${theme.hv.palette.accent.acce1}`
  },
  borderBottomDisplay: {
    borderBottom: `1px solid ${theme.hv.palette.accent.acce1}`
  },
  popperRoot: {
    display: "block"
  },
  listBorderDown: {
    height: "10px",
    width: "320px",
    background: theme.hv.palette.atmosphere.atmo1
  },
  listBorderUp: {
    height: "10px",
    boxShadow: " 0px -5px 5px -4px rgba(65,65,65,.12)",
    width: "320px",
    background: theme.hv.palette.atmosphere.atmo1
  },
  calendarOpenDown: {
    background: theme.hv.palette.atmosphere.atmo1,
    boxShadow: `0 0px 0 ${
      theme.hv.palette.atmosphere.atmo1
    }, 0 1px 8px rgba(65,65,65,.12)`
  },
  calendarOpenUp: {
    background: theme.hv.palette.atmosphere.atmo1,
    boxShadow: `0 0px 0 ${
      theme.hv.palette.atmosphere.atmo1
    }, 0 1px 8px rgba(65,65,65,.12)`
  }
});

export default styles;
