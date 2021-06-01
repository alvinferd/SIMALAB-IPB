import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  column: {
    borderBottom: "10px solid blue",
  },
  col: {
    textAlign: "left",

    paddingBottom: 8,
    marginRight: 8,
    borderBottom: "2px solid black",
  },
}));

function LabTable({ data, column, widthColumn }) {
  const classes = useStyles();
  return (
    <Box width="100%">
      <table>
        {widthColumn.map((width) => {
          return (
            <colgroup className={classes.column}>
              <col width={width} />
            </colgroup>
          );
        })}
        <thead>
          <tr>
            {column.map((item) => {
              return (
                <th className={classes.col}>
                  <Typography variant="h3" component="span">
                    {item}
                  </Typography>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  {item.map((text) => {
                    return (
                      <td style={{ padding: "12px 0" }}>
                        <Typography
                          color={
                            text === "Tolak"
                              ? "error"
                              : text === "Setuju"
                              ? "primary"
                              : undefined
                          }
                        >
                          {text}
                        </Typography>
                      </td>
                    );
                  })}
                  <td style={{ padding: "8px 0" }}>
                    <Button variant="contained" color="primary">
                      Tinjau
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}

export default LabTable;

// import React from "react";
// import MaterialTable from "material-table";
// import { forwardRef, createRef } from "react";
// import CustomTheme from "@/themes/default";

// import { Box } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/styles";
// import { resetServerContext } from "react-beautiful-dnd";

// import AddBox from "@material-ui/icons/AddBox";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import Check from "@material-ui/icons/Check";
// import ChevronLeft from "@material-ui/icons/ChevronLeft";
// import ChevronRight from "@material-ui/icons/ChevronRight";
// import Clear from "@material-ui/icons/Clear";
// import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import Edit from "@material-ui/icons/Edit";
// import FilterList from "@material-ui/icons/FilterList";
// import FirstPage from "@material-ui/icons/FirstPage";
// import LastPage from "@material-ui/icons/LastPage";
// import Remove from "@material-ui/icons/Remove";
// import SaveAlt from "@material-ui/icons/SaveAlt";
// import Search from "@material-ui/icons/Search";
// import ViewColumn from "@material-ui/icons/ViewColumn";
// import RefreshIcon from "@material-ui/icons/Refresh";
// import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

// import localization from "@/utils/lang/table";

// const tableIcons = {
//   Add: forwardRef((props, ref) => (
//     <AddBox {...props} ref={ref} color="primary" />
//   )),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => (
//     <DeleteOutline color="error" {...props} ref={ref} />
//   )),
//   DetailPanel: forwardRef((props, ref) => (
//     <ChevronRight {...props} ref={ref} />
//   )),
//   Edit: forwardRef((props, ref) => (
//     <Edit color="primary" {...props} ref={ref} />
//   )),
//   Export: forwardRef((props, ref) => (
//     <SaveAlt color="primary" {...props} ref={ref} />
//   )),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => (
//     <ChevronLeft {...props} ref={ref} />
//   )),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
// };

// function LabTable({
//   data = [],
//   columns = [],
//   onRefreshClick = () => {},
//   onUndoDeleteClick = () => {},
//   onRowAdd = (_newData) => {},
//   onRowUpdate = (_newData, _oldData) => {},
//   onRowDelete = (_oldData) => {},
//   detailPanel = undefined,
//   disableAdd = false,
//   disableUpdate = false,
//   disableDelete = false,
//   showUndoDelete = false,
//   options = {},
//   actions = [],
// }) {
//   resetServerContext();
//   const tableRef = createRef();
//   const editableActions = {
//     onRowAdd: disableAdd ? undefined : onRowAdd,
//     onRowUpdate: disableUpdate ? undefined : onRowUpdate,
//     onRowDelete: disableDelete ? undefined : onRowDelete,
//   };

//   return (
//     <ThemeProvider theme={CustomTheme}>
//       <MaterialTable
//         tableRef={tableRef}
//         icons={tableIcons}
//         title=""
//         data={data}
//         columns={columns}
//         localization={localization}
//         editable={editableActions}
//         options={{
//           ...options,
//           rowStyle: { fontFamily: `'Open Sans', sans-serif`, fontSize: 14 },
//           headerStyle: {
//             fontFamily: `'Open Sans', sans-serif`,
//             fontSize: 14,
//             fontWeight: 700,
//           },
//           actionsColumnIndex: -1,
//           exportButton: true,
//         }}
//         detailPanel={detailPanel}
//         components={{
//           Container: (props) => props.children,
//         }}
//         actions={[
//           ...actions,
//           {
//             icon: () => <SettingsBackupRestoreIcon color="primary" />,
//             tooltip: "Kembalikan data",
//             isFreeAction: false,
//             hidden: showUndoDelete ? false : true,
//             onClick: onUndoDeleteClick,
//           },
//           {
//             icon: () => <RefreshIcon color="primary" />,
//             tooltip: "Refresh Data",
//             isFreeAction: true,
//             onClick: onRefreshClick,
//           },
//         ]}
//       />
//     </ThemeProvider>
//   );
// }

// export default LabTable;
