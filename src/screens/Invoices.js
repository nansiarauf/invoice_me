import React from "react";
import { Table } from "react-bootstrap";
import useInvoice from "../hooks/useInvoices";

const Invoices = () => {
  const { error, invoices, loading } = useInvoice(
    JSON.parse(localStorage.getItem("userInfo"))._id
  );
  return (
    <div>
      <h1 className="text-white">ALL INVOICES SENT OUT</h1>
      {loading && <h1>loading ...</h1>}
      {error && <h1>error</h1>}
      {invoices && (
        <Table>
          <thead>
            <th>BUSINESS NAME</th>
            <th>INVOICE OWNER</th>
            <th>EMAIL</th>
            <th>AMOUNT DUE</th>
          </thead>
          {invoices.map((invoice) => (
            <tr key={invoice._id}>
              <td>{invoice.businessName}</td>
              <td>{invoice.name}</td>
              <td>{invoice.email}</td>
              <td>{invoice.amount_due}</td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Invoices;
