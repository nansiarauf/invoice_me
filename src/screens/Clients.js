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
        <main style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {/* <div className="card-header">Client Details</div> */}
          {clients.map((client) => (
            <Card style={{ width: "25rem" }}>
              <div className="card-body" key={client._id}>
                <div className="card-header">Client Details</div>
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
            </Card>
          ))}
        </main>
      )}
    </div>
  );
};

export default Clients;
