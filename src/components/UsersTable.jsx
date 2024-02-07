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

const UsersTable = () => {
    const columns = [
        { id: "id", name: "S.no" },
        { id: "DeviceId", name: "Device_ID" },
        { id: "StoreName", name: "Store_Name" },
        { id: "StoreAddress", name: "Store_Address" },
        { id: "StoreType", name: "Store_Type" },
        { id: "Status", name: "Status" },
        { id: "Email", name: "Email" },
        { id: "Phone", name: "PhoneNumber" },
        { id: "PasswordChanged", name: "Password_Changed" },
        { id: "GST", name: "GST" },
        { id: "GSTNumber", name: "GST_Number" },
        { id: "SubscriptionStatus", name: "Subscription_Status" },
        { id: "SubscriptionStart", name: "Subscription_Start" },
        { id: "SubscriptionEnd", name: "Subscription_End" },
        { id: "IsApproved", name: "Is_Approved" },
      ];
      
      const rows = [
        {
          id: 1,
          DeviceId: "ABC123",
          StoreName: "Store A",
          StoreAddress: "123 Main St",
          StoreType: "Grocery",
          Status: "Online",
          Email: "storeA@email.com",
          Phone: "123-456-7890",
          PasswordChanged: "Yes",
          GST: "18%",
          GSTNumber: "GST123",
          SubscriptionStatus: "Active",
          SubscriptionStart: "2022-01-01",
          SubscriptionEnd: "2023-01-01",
          IsApproved: true,
        },
        {
          id: 2,
          DeviceId: "XYZ456",
          StoreName: "Store B",
          StoreAddress: "456 Oak St",
          StoreType: "Clothing",
          Status: "Offline",
          Email: "storeB@email.com",
          Phone: "987-654-3210",
          PasswordChanged: "No",
          GST: "12%",
          GSTNumber: "GST456",
          SubscriptionStatus: "Inactive",
          SubscriptionStart: "2022-02-01",
          SubscriptionEnd: "2023-02-01",
          IsApproved: false,
        },
        {
          id: 3,
          DeviceId: "PQR789",
          StoreName: "Store C",
          StoreAddress: "789 Pine St",
          StoreType: "Electronics",
          Status: "Online",
          Email: "storeC@email.com",
          Phone: "555-123-4567",
          PasswordChanged: "Yes",
          GST: "15%",
          GSTNumber: "GST789",
          SubscriptionStatus: "Active",
          SubscriptionStart: "2022-03-01",
          SubscriptionEnd: "2023-03-01",
          IsApproved: true,
        },
        {
          id: 4,
          DeviceId: "LMN012",
          StoreName: "Store D",
          StoreAddress: "012 Cedar St",
          StoreType: "Home Decor",
          Status: "Offline",
          Email: "storeD@email.com",
          Phone: "333-888-9999",
          PasswordChanged: "No",
          GST: "10%",
          GSTNumber: "GST012",
          SubscriptionStatus: "Inactive",
          SubscriptionStart: "2022-04-01",
          SubscriptionEnd: "2023-04-01",
          IsApproved: false,
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
              <TableRow >
                {columns.map((column) => (
                  <>
                    <TableCell key={column.id} className="flex ">
                      <p className=" font-bold text-lg text-center whitespace-nowrap">
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
                            <TableCell className=" flex ">
                              <p className="text-md text-center whitespace-nowrap">{value}</p>
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

export default UsersTable;
