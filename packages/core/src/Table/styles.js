import hexToRgbA from "../utils/hexToRgbA";

const tableStyleOverrides = (classes) => ({
  getProps: () => ({ className: classes.root }),
  getTableProps: () => ({ className: classes.table }),
  getTheadGroupProps: () => ({ className: classes.theadGroup }),
  getTheadGroupTrProps: () => ({ className: classes.theadGroupTr }),
  getTheadGroupThProps: () => ({ className: classes.theadGroupTh }),
  getTheadProps: () => ({ className: classes.thead }),
  getTheadThProps: () => ({ className: classes.theadTh }),
  getTheadFilterProps: () => ({ className: classes.theadFilter }),
  getTheadFilterTrProps: () => ({ className: classes.theadFilterTr }),
  getTheadFilterThProps: () => ({ className: classes.theadFilterTh }),
  getTbodyProps: () => ({ className: classes.tbody }),
  getTrGroupProps: () => ({ className: classes.trGroups }),
  getTrProps: () => ({ className: classes.tr }),
  // getThProps: () => ({ className: classes.th }), TODO: There is a bug in the component, where this prop is not used
  getTdProps: () => ({ className: classes.td }),
  getTfootProps: () => ({ className: classes.tfoot }),
  getTfootTrProps: () => ({ className: classes.tfootTr }),
  getTfootThProps: () => ({ className: classes.tfootTh }),
  getPaginationProps: () => ({ className: classes.pagination }),
  getLoadingProps: () => ({ className: classes.loading }),
  getNoDataProps: () => ({ className: classes.noDate }),
  getResizerProps: () => ({ className: classes.resizer }),
});

const styles = (theme) => {
  const semiTransparentAtmo1 = hexToRgbA(theme.hv.palette.atmosphere.atmo1, 0.4);

  return {
    root: {
      ...theme.hv.typography.normalText,
      fontFamily: theme.hv.typography.fontFamily,
      textAlign: "right",
      border: "none",
      position: "relative",
      display: "flex",
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "normal",
      flexDirection: "column",
      "& $table": {
        "-ms-overflow-y": "hidden",
        "& $thead": {
          background: theme.hv.palette.atmosphere.atmo1,
          textAlign: `right`,
          borderTop: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
          borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
          boxShadow: `none`,
          // Needed because of the HOC for the fixed columns
          top: "0 !important",
          display: "flex",
          "& .rt-tr": {
            flex: "1 0 auto",
            display: "inline-flex",
          },
          "& $theadTh": {
            outline: "none",
            backgroundColor: theme.hv.palette.atmosphere.atmo1,
            height: "52px",
            minWidth: "72px",
            padding: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            border: "none",
            boxShadow: "none",
            "& > div": {
              width: "100%",
              alignSelf: "baseline",
            },
            "& > div.rt-resizer": {
              width: theme.hv.spacing.xs,
              right: "-8px",
            },
            "&:first-child:not(.checkbox)": {
              borderLeft: "none",
            },
            "&:nth-last-child(2).-secondaryActionsNeighbor": {
              borderRightColor: theme.hv.palette.atmosphere.atmo4,
            },
            "&:last-child": {
              borderRight: "none",
            },
            "&.secondaryAction": {
              minWidth: "30px",
              maxWidth: "30px",
              borderLeft: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
            },
            "&.checkBox": {
              minWidth: "31px",
              maxWidth: "31px",
              borderRight: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
            },
            "&.rt-th": {
              flex: "1 0",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            },
            "&.rt-th.-cursor-pointer": {
              cursor: "pointer",
            },
            "& ~.rt-th.rthfc-th-fixed-left-last": {
              left: 0,
              borderLeft: "none",
            },
            "&.rthfc-th-fixed": {
              position: "sticky",
              zIndex: 1,
            },
            "&.rt-th.rthfc-th-fixed-left-last": {
              borderRight: `solid 1px ${theme.hv.palette.atmosphere.atmo4}`,
            },
            "&.rt-th.rthfc-th-fixed-right-first": {
              borderLeft: `solid 1px ${theme.hv.palette.atmosphere.atmo4}`,
            },
            "&.sortable": {
              "&:hover > div > div > div ": {
                visibility: "visible",
              },
              "&:hover, &:focus-within": {
                // hover and focus in table header
                background: theme.hv.palette.atmosphere.atmo3,
              },
              "&:hover": {
                // hover and focus in table header
                background: theme.hv.palette.atmosphere.atmo3,
              },
            },
          },
        },
        "& $tbody": {
          "-ms-overflow-y": "hidden",
          background: theme.hv.palette.atmosphere.atmo2,
          "& $trGroups": {
            borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
            "-webkit-box-flex": 1,
            flex: "1 0 auto",
            display: "flex",
            "-webkit-box-orient": "vertical",
            "-webkit-box-direction": "normal",
            flexDirection: "column",
            alignItems: "stretch",
            "& $tr": {
              flex: "1 0 auto",
              display: "inline-flex",
              "& > div$td": {
                background: theme.hv.palette.atmosphere.atmo2,
                "&.sorted": {
                  background: semiTransparentAtmo1,
                },
                "&.rthfc-td-fixed": {
                  position: "sticky",
                  zIndex: 1,
                  background: theme.hv.palette.atmosphere.atmo2,
                  "&.sorted": {
                    backgroundColor: theme.hv.palette.atmosphere.atmo2,
                    backgroundImage: `linear-gradient(to right, ${semiTransparentAtmo1}, ${semiTransparentAtmo1})`,
                  },
                },
              },
              "&.selected > div$td": {
                "&.rthfc-td-fixed": {
                  background: theme.hv.palette.atmosphere.atmo1,
                  "&.sorted": {
                    background: theme.hv.palette.atmosphere.atmo1,
                  },
                },
              },
              "&.selected": {
                background: theme.hv.palette.atmosphere.atmo1,
                "& > div$td": {
                  background: "none",
                },
              },
              "&.selected:hover > div$td": {
                background: theme.hv.palette.atmosphere.atmo3,
                "&.rthfc-td-fixed": {
                  background: theme.hv.palette.atmosphere.atmo3,
                  "&.sorted": {
                    background: theme.hv.palette.atmosphere.atmo3,
                  },
                },
              },
              "&:hover > div$td": {
                background: theme.hv.palette.atmosphere.atmo3,
                "&.sorted": {
                  background: theme.hv.palette.atmosphere.atmo3,
                },
                "&.rthfc-td-fixed": {
                  background: theme.hv.palette.atmosphere.atmo3,
                  "&.sorted": {
                    background: theme.hv.palette.atmosphere.atmo3,
                  },
                },
              },
            },
          },
          "& $td": {
            background: "transparent",
            border: "0 solid transparent",
            padding: theme.hvSpacing(0, "xs"),
            minWidth: "72px",
            "&.sortable": {
              paddingLeft: "32px",
            },
            "&.alphaNumeric": {
              minWidth: "70px",
              textAlign: "left",
            },
            "&.link": {
              paddingLeft: "32px",
              "&:not(.sortable)": {
                paddingLeft: theme.hv.spacing.xs,
              },
            },
            "&.secondaryAction": {
              minWidth: "31px",
              maxWidth: "31px",
              padding: 0,
              borderLeft: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
              overflow: "visible",
            },
            "&:first-child": {
              borderLeft: "none",
            },
            "&:last-child": {
              borderRight: "none",
            },
            "&.rt-td": {
              flex: "1 0",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              transition: ".3s ease",
              transitionProperty: "all",
            },
            "&.rt-td.rthfc-td-fixed-left-last": {
              borderRight: `solid 1px ${theme.hv.palette.atmosphere.atmo4}`,
            },
            "&.rt-td.rthfc-td-fixed-right-first": {
              borderLeft: `solid 1px ${theme.hv.palette.atmosphere.atmo4}`,
            },
            "&$expand": {
              paddingLeft: "0",
            },
          },
          "& .firstExpandable": {
            paddingLeft: "0px",
          },
          "& .checkBox": {
            minWidth: "31px",
            maxWidth: "31px",
            padding: 0,
            borderRight: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
          },
        },
      },
      "& $td": {
        display: "flex",
        alignItems: "center",
      },
    },
    table: {
      flex: "auto 1",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      width: "100%",
      borderCollapse: "collapse",
      overflow: "auto",
    },
    theadGroup: {},
    theadGroupTr: {},
    theadGroupTh: {},
    thead: {
      ...theme.hv.typography.highlightText,
    },
    theadTh: {},

    theadFilter: {},
    theadFilterTr: {},
    theadFilterTh: {},
    tbody: {},
    tBodyEmpty: {
      borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
      minHeight: "calc(32px * 3)",
    },
    trGroups: {},
    tr: {
      height: "32px",
      "& $textContainer": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "left",
      },
    },
    textContainer: {},
    // th: {}, TODO: There is a bug in the component, where this prop is not used
    td: {},
    tfoot: {},
    tfootTr: {},
    tfootTh: {},
    pagination: {},
    loading: {
      display: "block",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: "rgba(255, 255, 255, 0.8)",
      transition: "all 0.3s ease",
      zIndex: -1,
      opacity: 0,
      pointerEvents: "none",
    },
    noDate: {},
    resizer: {},
    rtSortIcon: {
      width: "32px",
      height: "32px",
      position: "absolute",
    },
    sortedIconShown: {
      visibility: "visible",
    },
    sortedIconHidden: {
      display: "none",
    },
    pointer: {
      cursor: "pointer",
    },
    tableContainer: {},
    subtitle: {},
    title: {
      marginBottom: theme.hv.spacing.sm,
    },
    checkBoxBorder: {
      "&:nth-child(2)": {
        borderLeft: `1px solid ${theme.hv.palette.atmosphere.atmo3}`,
      },
    },
    checkBoxRow: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.hv.spacing.xs,
    },
    centered: {
      justifyContent: "center",
    },
    alphaNumeric: {
      justifyContent: "flex-start",
    },
    numeric: {
      justifyContent: "flex-end",
      textAlign: "right",
    },
    link: {
      justifyContent: "flex-start",
      "& > a": {
        ...theme.hv.typography.link,
        textDecoration: "none",
      },
    },
    subComponentContainer: {
      width: "100%",
      height: "100%",
      borderTop: `1px solid ${theme.hv.palette.atmosphere.atmo4}`,
      background: theme.hv.palette.atmosphere.atmo1,
      padding: theme.hvSpacing("md", "32px"),
    },
    iconContainer: {
      marginLeft: 5,
      marginRight: 5,
      width: "25px",
      height: "25px",
      minWidth: "25px",
      minHeight: "25px",
      borderRadius: 0,
      "&:focus": {
        background: theme.hv.palette.atmosphere.atmo3,
        outline: 0,
      },
    },
    firstWithNumeric: {
      width: "calc(100% - 32px)",
    },
    checkBoxText: {
      display: "flex",
      alignItems: "center",
    },
    menuItem: {
      ...theme.hv.typography.normalText,
      textAlign: "right",
      marginBottom: "-6px",
      marginTop: "-6px",
    },
    expand: {
      ...theme.hv.typography.highlightText,
    },
    separatorContainer: {
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      "&>svg": {
        display: "block",
        margin: "0 auto",
      },
    },
    tooltipAnchor: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    bulkActions: {
      margin: theme.hvSpacing("sm", 0, "xs"),
    },
  };
};

export default styles;
export { styles, tableStyleOverrides };
