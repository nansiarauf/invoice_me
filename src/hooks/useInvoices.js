// import axios from "axios";
import { useState, useEffect } from "react";

const useInvoice = (id) => {
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userInfo")).token,
      },
    };
    const getInvoices = async () => {
      const res = await fetch(
        `https://lit-sea-14855.herokuapp.com/api/v1/user/invoice/all/${id}`,
        config
      )
        .then((res) => res.json())
        .catch((err) => setError(err));
      console.log(res);
      setLoading(false);
      setInvoices(res);
    };

    getInvoices();
  }, [id]);

  return {
    loading,
    error,
    invoices,
  };
};

export default useInvoice;
