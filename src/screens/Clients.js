import { Card } from "react-bootstrap";
import useClients from "../hooks/useClients";
const Clients = () => {
  const { error, clients, loading } = useClients(
    JSON.parse(localStorage.getItem("userInfo"))._id
  );
  return (
    <div>
      <h1 className="text-white">CLIENT DATABASE</h1>
      {loading && <h1>loading ...</h1>}
      {error && <h1>error</h1>}
      {clients && (
        <Card
          className="card text-white bg-primary ml-5"
          style={{ width: "20rem" }}
        >
          <div className="card-header">Client Details</div>
          {clients.map((client) => (
            <>
              <div className="card-body" key={client._id}>
                <h4 className="card-title">Business Name:</h4>
                <span>{client.businessName}</span>
                <h4 className="card-title">Owner:</h4>
                <span>{client.name}</span>
                <h4 className="card-title">Email:</h4>
                <span>{client.email}</span>
                <h4 className="card-title">Phone:</h4>
                <span>{client.phone}</span>
                <h4 className="card-title">Address:</h4>
                <span>{client.address}</span>
              </div>
            </>
          ))}
        </Card>
      )}
    </div>
  );
};

export default Clients;
