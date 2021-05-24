import "../App.css";
import { Route } from "react-router-dom";
import Invoices from "./Invoices";
// import Login from "./Login";
import AddClient from "./AddClient";
import Clients from "./Clients";
import AccountPage from "./AccountPage";
import InvoicesPage from "./InvoicesPage";
import SettingsPage from "./SettingsPage";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Card, Container, Col } from "react-bootstrap";
// import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="App">
        <div className="nav-content">
          <SideBar />
          <div className="dashboard-content">
            <Route
              path="/dashboard"
              exact
              render={() => {
                return (
                  <Container className="d-flex justify-content-center">
                    <Col
                      xs={12}
                      sm={12}
                      md={6}
                      lg={8}
                      style={{
                        display: "grid",
                        gridGap: "20px",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <Card>
                        <div className="card text-white bg-secondary mb-3">
                          <div className="card-header">Payment Reminders</div>
                          <div className="card-body">
                            <h4 className="card-title">Collect more!</h4>
                            <p className="card-text">
                              INVOICE ME! can help you make payment reminders to
                              your client via email, on specified dates.
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card>
                        <div className="card text-white bg-secondary mb-3">
                          <div className="card-header">Database</div>
                          <div className="card-body">
                            <h4 className="card-title">
                              A simple client database
                            </h4>
                            <p className="card-text">
                              We help you keep a simple database of all clients
                              you have served.Collect client data and easily
                              reach out to them.
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card>
                        <div className="card text-white bg-secondary mb-3">
                          <div className="card-header">
                            Track Payment schedules
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">Timely Reminders</h4>
                            <p className="card-text">
                              We are bound as humans to forget the most
                              important things, ones such as paying out debts.
                              Make sure you ring a bell in clients ears to
                              settle debts owed you.
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card>
                        <div className="card text-white bg-secondary mb-3">
                          <div className="card-header">Easy Access</div>
                          <div className="card-body">
                            <h4 className="card-title">All invoices</h4>
                            <p className="card-text">
                              Access all your invoice history with ease.Get
                              insight into which reminders you have sent out so
                              you can easily reconcile payments received
                            </p>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Container>
                );
              }}
            />
            <Route path="/dashboard/invoices" component={Invoices} />
            <Route path="/dashboard/create" component={InvoicesPage} />
            <Route path="/dashboard/addclient" component={AddClient} />
            <Route path="/dashboard/all" component={Clients} />
            <Route path="/dashboard/account" component={AccountPage} />
            <Route path="/dashboard/settings" component={SettingsPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
