import { DataGrid, GridColDef } from "@mui/x-data-grid";
import orders from "../data/orders.json";

const columns: GridColDef<(typeof orders)[number]>[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "customer_name",
    headerName: "Customer name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "platform",
    headerName: "Order platform",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "order_date",
    headerName: "Order date",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "total_price",
    headerName: "Total price",
    type: "number",
    width: 100,
  },
];

const OrdersTable = () => {
  return (
    <DataGrid
      rows={orders}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
  );
};

export default OrdersTable;
