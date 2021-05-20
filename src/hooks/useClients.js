import axios from "axios";
import { useState, useEffect } from "react";

const useClients = (id) => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userInfo")).token,
      },
    };

    const getClients = async () => {
      const res = await fetch(
        `https://lit-sea-14855.herokuapp.com/api/v1/user/clients/allclients/${id}`,
        config
      )
        .then((res) => res.json())
        .catch((err) => setError(err));
      console.log(res);
      setLoading(false);
      setClients(res);
    };
    getClients();
  }, [id]);

  return {
    loading,
    error,
    clients,
  };
};
export default useClients;
