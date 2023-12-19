import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

const StationTableWrapper = styled.div`
  width: 100%;
  height: calc(90svh + 34px);
  padding: 24px 0 34px 0;

  .MuiDataGrid-root {
    --unstable_DataGrid-radius: 8px;

    .MuiDataGrid-cell {
      padding: 12px 10px;
      border: none;
    }

    .MuiDataGrid-columnHeaders {
      background-color: var(--table-col-headers-background-color);
      font-size: 16px;
      color: #fff;
    }
    .MuiDataGrid-columnSeparator {
      display: none;
    }
    .MuiDataGrid-iconButtonContainer {
      display: none;
    }

    .odd {
      background-color: var(--table-background-color-odd);
    }
    .even {
      background-color: var(--table-background-color-even);
    }

    .number-text {
      color: var(--table-number-text-color);
    }
  }

  @media ${Metrics.media.desk} {
    height: calc(85svh + 44px);
    padding: 40px 0 44px 0;

    .MuiDataGrid-root {
      --unstable_DataGrid-radius: 28px;

      .MuiDataGrid-cell {
        font-size: 16px;
        padding: 24px 10px;
      }
      .MuiDataGrid-columnHeaders {
        font-size: 18px;
      }
    }
  }
`;
const columnsConfig = [
  {
    field: "city",
    headerName: "縣市",
  },
  {
    field: "dist",
    headerName: "區域",
  },
  {
    field: "stationName",
    headerName: "站點名稱",
    flex: 2,
    minWidth: 164,
  },
  {
    field: "parklingLot",
    headerName: "可借車輛",
    cellClassName: "number-text",
  },
  {
    field: "available",
    headerName: "可還空位",
    cellClassName: "number-text",
  },
];
const columns = columnsConfig.map((column) => ({
  headerAlign: "center",
  align: "center",
  flex: 1,
  minWidth: 85,
  ...column,
}));

export const StationTable = ({ rows, isLoading }) => {
  return (
    <StationTableWrapper>
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={columns}
        disableColumnMenu
        // hideFooter
        hideFooterRowCount
        hideFooterSelectedRowCount
        // hideFooterPagination
        disableRowSelectionOnClick
        getRowId={(row) => row.stationName}
        // autoPageSize
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        getRowHeight={() => "auto"}
        columnHeaderHeight={66}
        rowSpacingType="border"
      />
    </StationTableWrapper>
  );
};
