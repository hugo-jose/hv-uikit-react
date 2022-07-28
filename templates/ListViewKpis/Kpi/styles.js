const styles = (theme) => ({
  container: {
    padding: theme.hv.spacing.sm,
  },
  card: {
    cursor: "pointer",
  },
  title: {
    margin: `${theme.hv.spacing.xs}px 0`,
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  variation: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  selected: {
    outline: `1px solid ${theme.hv.palette.atmosphere.atmo5}`,
  },
});

export default styles;
