import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { TreeDataState, CustomTreeData } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn
} from "@devexpress/dx-react-grid-material-ui";

import { rows } from "../../../demo-data/generator";

const getChildRows = (row, rootRows) => {
  return null;
  // return row ? row.items : rootRows;
};

export default () => {
  const [columns] = useState([
    { name: "Subject", title: "Task Subject" },

    { name: "Name", title: "Name" },
    { name: "SpanId", title: "SpanId" },
    { name: "TraceId", title: "TraceId" }
  ]);
  console.log(rows);

  const [tableColumnExtensions] = useState([
    { columnName: "name", width: 300 }
  ]);

  return (
    <Paper>
      {/* <Grid rows={rows} columns={columns}>
        <TreeDataState />
        <CustomTreeData getChildRows={getChildRows} />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
        <TableTreeColumn for="name" />
      </Grid> */}
    </Paper>
  );
};
