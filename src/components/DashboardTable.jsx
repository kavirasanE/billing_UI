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

const DashboardTable = () => {
  const columns = [
    { id: "id", name: "S.no" },
    { id: "DeviceId", name: "Device ID" },
    { id: "Store Name", name: "Store Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "SubscriptionStatus", name: "Subscription Status" },
    { id: "Status", name: "Status" },
  ];
  const rows = [
    {
      id: 1,
      DeviceId: "ABC123",
      "Store Name": "Store A",
      email: "storeA@email.com",
      phone: "123-456-7890",
      SubscriptionStatus: "Active",
      Status: "Online",
      Action: "Edit",
    },
    {
      id: 2,
      DeviceId: "XYZ456",
      "Store Name": "Store B",
      email: "storeB@email.com",
      phone: "987-654-3210",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 3,
      DeviceId: "PQR789",
      "Store Name": "Store C",
      email: "storeC@email.com",
      phone: "555-123-4567",
      SubscriptionStatus: "Active",
      Status: "Online",
      Action: "Edit",
    },
    {
      id: 4,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 5,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 6,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 7,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 8,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 9,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 10,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 11,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    {
      id: 12,
      DeviceId: "LMN012",
      "Store Name": "Store D",
      email: "storeD@email.com",
      phone: "333-888-9999",
      SubscriptionStatus: "Inactive",
      Status: "Offline",
      Action: "Delete",
    },
    // Add more rows as needed
  ];

  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer  sx={{ maxHeight: 550 }} className="border-2  rounded-2xl shadow-2xl">
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow className="flex justify-items-center font-bold">
                {columns.map((column) => (
                  <>
                    <TableCell key={column.id} >
                      <p className="font-bold text-lg text-center whitespace-nowrap">
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
                              <p className=" text-md text-center whitespace-nowrap">{value}</p>
                            </TableCell>
                          );
                        })}
                      <TableCell >
                        <div className="flex justify-center">
                          <button className="border-2 shadow-xl p-2 px-8 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold ">
                            Approve
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

export default DashboardTable;
