import { Card } from "react-bootstrap";
import useClients from "../hooks/useClients";
import Footer from "../components/Footer";
const Clients = () => {
  const { error, clients, loading } = useClients(
    JSON.parse(localStorage.getItem("userInfo"))._id
  );
  return (
    <div>
      <h1 className="text-white text-center">CLIENT DATABASE</h1>
      {loading && <h1>loading ...</h1>}
      {error && <h1>error</h1>}
      {clients && (
        <main style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {/* <div className="card-header">Client Details</div> */}
          {clients.map((client) => (
            <Card style={{ width: "25rem", height: "auto" }}>
              <div className="card-body" key={client._id}>
                <div className="card-header">Client Details</div>
                <h5 className="card-title">Business Name:</h5>
                <span>{client.businessName}</span>
                <h5 className="card-title">Owner:</h5>
                <span>{client.name}</span>
                <h5 className="card-title">Email:</h5>
                <span>{client.email}</span>
                <h5 className="card-title">Phone:</h5>
                <span>{client.phone}</span>
                <h5 className="card-title">Address:</h5>
                <span>{client.address}</span>
              </div>
            </Card>
          ))}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Clients;
