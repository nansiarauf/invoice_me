import React from "react";
import { Table } from "react-bootstrap";
import useInvoice from "../hooks/useInvoices";

const Invoices = () => {
  const { error, invoices, loading } = useInvoice(
    JSON.parse(localStorage.getItem("userInfo"))._id
  );
  return (
    <div>
      <h1 className="text-white text-center">ALL INVOICES SENT OUT</h1>
      {loading && <h1>loading ...</h1>}
      {error && <h1>error</h1>}
      {invoices && (
        <Table className="table table-hover ml-5">
          <thead>
            <tr>
              <th scope="col">BUSINESS NAME</th>
              <th scope="col">INVOICE OWNER</th>
              <th scope="col">EMAIL</th>
              <th scope="col">SERVICE</th>
              <th scope="col">AMOUNT DUE</th>
              <th scope="col">REMINDER DATE</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice._id} className="table-primary">
                <td>{invoice.businessName}</td>
                <td>{invoice.name}</td>
                <td>{invoice.email}</td>
                <td>{invoice.service}</td>
                <td>{invoice.amount_due}</td>
                <td>{invoice.reminder_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Invoices;
