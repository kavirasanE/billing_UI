import React from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

const ManageSubscriptionTable = () => {
  const columns = [
    { id: "id", name: "S.no" },
    { id: "Subscription", name: "Subscription (In Months)" },
    { id: "Price", name: "Price" },
  ];
  const rows = [
    {
      id: 1,
      Subscription: "ABC123",
      Price: "123-456-7890",
    },
    {
      id: 2,
      Subscription: "XYZ456",
      Price: "987-654-3210",
    },
    {
      id: 3,
      Subscription: "PQR789",
      Price: "555-123-4567",
    },
    {
      id: 4,
      Subscription: "LMN012",
      Price: "333-888-9999",
    },
    {
      id: 5,
      Subscription: "DEF345",
      Price: "111-222-3333",
    },
    {
      id: 6,
      Subscription: "GHI678",
      Price: "444-555-6666",
    },
    {
      id: 7,
      Subscription: "JKL901",
      Price: "777-888-9999",
    },
    {
      id: 8,
      Subscription: "MNO234",
      Price: "555-444-3333",
    },
    {
      id: 9,
      Subscription: "QRS567",
      Price: "111-000-9999",
    },
    {
      id: 10,
      Subscription: "TUV890",
      Price: "222-333-4444",
    },
    // Add more rows as needed
  ];
  

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{ maxHeight: 500 }}
          className="border-2  rounded-2xl shadow-2xl"
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="flex justify-items-center font-bold">
                {columns.map((column) => (
                  <>
                    <TableCell key={column.id}>
                      <p className="font-bold text-lg text-center">
                        {column.name}
                      </p>
                    </TableCell>
                  </>
                ))}
                <TableCell>
                  <p className="font-bold text-lg text-center">Action</p>
                </TableCell>
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
                              <p className=" text-md font-semibold text-center">{value}</p>
                            </TableCell>
                          );
                        })}
                      <TableCell>
                        <div className="flex justify-center">
                          <button className="border-2 shadow-xl p-2 px-8 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-extrabold ">
                            Edit
                          </button>
                        </div>
                      </TableCell>
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

export default ManageSubscriptionTable;
