import React from "react";
import CustomTable from "./Components/CustomTable/CustomTable";
const columns = {
  date: "Date",
  invoiceID: "Invoice ID",
  invoiceDate: "Invoice Date",
  SupplierOrBuyer: "Supplier/Buyer",
  ApprovalStatus: "Approval Status",
  appliedForLoan: "Apply for Loan",
};

const data = [
  {
    date: "12/12/2021",
    invoiceID: "ASDECCDD112SJ9",
    invoiceDate: "02/12/2011",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Seller",
    ApprovalStatus: <span className="pending">Pending</span>,
    appliedForLoan: <button className="active">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "ASDECCDD22SJ8",
    invoiceDate: "18/01/2021",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Buyer",
    ApprovalStatus: <span className="approved">approved</span>,
    appliedForLoan: <button className="inactive">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "ASDECCDD112J34",
    invoiceDate: "29/02/2021",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Seller",
    ApprovalStatus: <span className="pending">Pending</span>,
    appliedForLoan: <button className="active">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "ASDEYBD112267",
    invoiceDate: "12/12/2021",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Buyer",
    ApprovalStatus: <span className="approved">approved</span>,
    appliedForLoan: <button className="inactive">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "YUUECCDD112SJ9",
    invoiceDate: "02/12/2011",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Seller",
    ApprovalStatus: <span className="pending">Pending</span>,
    appliedForLoan: <button className="active">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "HKGDD22SJ8",
    invoiceDate: "18/01/2021",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Buyer",
    ApprovalStatus: <span className="approved">approved</span>,
    appliedForLoan: <button className="inactive">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "ASDECCDD112J34",
    invoiceDate: "29/02/2021",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Seller",
    ApprovalStatus: <span className="pending">Pending</span>,
    appliedForLoan: <button className="active">Apply Now</button>,
  },
  {
    date: "12/12/2021",
    invoiceID: "ASDEIUY&112267",
    invoiceDate: "12/12/2021",
    name: "Saske Uchiha",
    SupplierOrBuyer: "Buyer",
    ApprovalStatus: <span className="approved">approved</span>,
    appliedForLoan: <button className="inactive">Apply Now</button>,
  },
];
const App = () => {
  return (
    <>
      <h1>New App.tsx v17. That's cool thing ! </h1>;
      <CustomTable
        data={data}
        columns={columns}
        onRowClick={(e) => console.log(e)}
        rowPerPage={3}
      />
    </>
  );
};
export default App;
