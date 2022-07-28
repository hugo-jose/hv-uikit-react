import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  HvContainer,
  HvGrid,
  HvGlobalActions,
  HvButton,
  HvBulkActions,
  HvPagination,
} from "@hitachivantara/uikit-react-core";
import {
  HvControls,
  HvLeftControl,
  HvRightControl,
  useHvData,
  useHvSortBy,
  useHvGlobalFilter,
  useHvRowSelection,
  useHvBulkActions,
  useHvPagination,
  useHvFilters,
} from "@hitachivantara/uikit-react-lab";
import { withStyles } from "@mui/styles";

import Kpi from "./Kpi";
import List from "./ListView";
import styles from "./styles";
import { getColumns, makeData, actions } from "./utils";

const ListViewKpis = ({ classes }) => {
  const originalData = useMemo(() => makeData(25), []);
  const [data] = useState(originalData);
  const columns = useMemo(() => getColumns(), []);
  const [isLoading, setIsLoading] = useState(false);
  const [kpiSelection, setKpiSelection] = useState();
  const breakpoints = { xl: 3, lg: 3, md: 3, sm: 6, xs: 12 };

  const instance = useHvData(
    {
      data,
      columns,
      initialState: { pageSize: 5 },
    },
    useHvGlobalFilter,
    useHvFilters,
    useHvSortBy,
    useHvPagination,
    useHvRowSelection,
    useHvBulkActions
  );

  const idsToControl = {
    cards: "cardsGrid",
    list: "itemList",
  };

  // Mock refresh function just simulating some time spent on refetching data
  const doRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
    instance.setFilter("status", "");
  };

  const handleAction = (e, id, action) => {
    if (action.id === "refresh") {
      doRefresh();
    }
  };

  const bulkActionProps = instance.getHvBulkActionsProps?.();

  const getRequestCount = (status) => {
    return instance.initialRows.filter((r) => r.original.status === status).length;
  };

  return (
    <HvContainer maxWidth="lg">
      <HvGlobalActions title="Requests" backButton={false}>
        <HvButton category="primary">Request Server</HvButton>
      </HvGlobalActions>

      <div className={classes.container}>
        <HvGrid container>
          <HvGrid item {...breakpoints}>
            <Kpi
              title="Sucess Requests"
              count={getRequestCount(0)}
              color="sema1"
              variation="up"
              status={0}
              instance={instance}
              kpiSelection={kpiSelection}
              setKpiSelection={setKpiSelection}
            />
          </HvGrid>
          <HvGrid item {...breakpoints}>
            <Kpi
              title="Error Requests"
              count={getRequestCount(1)}
              color="sema4"
              variation="down"
              status={1}
              instance={instance}
              kpiSelection={kpiSelection}
              setKpiSelection={setKpiSelection}
            />
          </HvGrid>
          <HvGrid item {...breakpoints}>
            <Kpi
              title="Open Requests"
              count={getRequestCount(2)}
              color="sema3"
              variation="down"
              status={2}
              instance={instance}
              kpiSelection={kpiSelection}
              setKpiSelection={setKpiSelection}
            />
          </HvGrid>
          <HvGrid item {...breakpoints}>
            <Kpi
              title="Unassigned Requests"
              count={getRequestCount(3)}
              color="sema2"
              variation="up"
              status={3}
              instance={instance}
              kpiSelection={kpiSelection}
              setKpiSelection={setKpiSelection}
            />
          </HvGrid>
        </HvGrid>
      </div>

      <div className={classes.controls}>
        <HvControls views={[]} defaultView="card" callbacks={instance}>
          <HvLeftControl
            placeholder="Search"
            searchProps={{
              inputProps: { "aria-controls": `${idsToControl.cards} ${idsToControl.list}` },
            }}
          />
          <HvRightControl hideSortBy />
        </HvControls>
      </div>

      <div className={classes.bulkActions}>
        <HvBulkActions
          {...bulkActionProps}
          numTotal={data.length}
          numSelected={instance.selectedFlatRows.length}
          maxVisibleActions={2}
          onSelectAll={() => bulkActionProps.onSelectAll()}
          onSelectAllPages={() => bulkActionProps.onSelectAllPages()}
          actions={actions}
          actionsDisabled={false}
          actionsCallback={handleAction}
          checkboxProps={{ "aria-controls": `${idsToControl.cards} ${idsToControl.list}` }}
        />
      </div>

      <div className={classes.pagination}>
        <List instance={instance} isLoading={isLoading} />
        {instance.page?.length ? <HvPagination {...instance.getHvPaginationProps()} /> : undefined}
      </div>
    </HvContainer>
  );
};

ListViewKpis.propTypes = {
  /**
   * The CSS Classes object.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the KPIs List container.
     */
    container: PropTypes.string,
    /**
     * Styles applied to the KPIs List controls section.
     */
    controls: PropTypes.string,
    /**
     * Styles applied to the KPIs List bulk actions section.
     */
    bulkActions: PropTypes.string,
    /**
     * Styles applied to the KPIs List pagination section.
     */
    pagination: PropTypes.string,
  }),
};

export default withStyles(styles)(ListViewKpis);
