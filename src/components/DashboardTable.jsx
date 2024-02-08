import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

const DashboardTable = ({ columns, rows, action }) => {
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{ maxHeight: 550 }}
          className="border-2  rounded-2xl shadow-2xl"
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="flex justify-items-center font-bold">
                {columns.map((column) => (
                  <>
                    <TableCell key={column.id}>
                      <p className="font-bold text-lg text-center whitespace-nowrap">
                        {column.name}
                      </p>
                    </TableCell>
                  </>
                ))}

                {action.isReq && (
                  <TableCell>
                    <p className="font-bold text-lg text-center">Action</p>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row, i) => {
                  return (
                    <TableRow key={i} fixed>
                      {columns &&
                        columns.map((column, i) => {
                          let value = row[column.id];
                          return (
                            <TableCell>
                              <p className=" text-md text-center whitespace-nowrap">
                                {value}
                              </p>
                            </TableCell>
                          );
                        })}

                      {action.approve.status && (
                        <TableCell>
                          <div className="flex justify-center">
                            <button
                              className="border-2 shadow-xl p-2 px-8 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold"
                              id={row.UDR_Id}
                              onClick={action.approve.handleFunction}
                            >
                              Approve
                            </button>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default DashboardTable;
