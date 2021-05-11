import { useState, useEffect, useContext } from "react";
import { Container, Nav, Col, Row, Button } from "react-bootstrap";
import img from "../images/hero.png";
import Login from "./Login";
import Register from "./Register";
import { userContext } from "../contexts/userContext";
import ico from "../images/ico.png";

const Home = ({ history }) => {
  const { userInfo } = useContext(userContext);

  const [auth, setAuth] = useState(true);

  // HOOK TO HANDLE THE REDIRECT RENDERING
  useEffect(() => {
    if (userInfo && userInfo.token) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  return (
    <Container
      className="home"
      style={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        position: "fixed",
        top: 0,
      }}
    >
      <Nav className="justify-content-end" activeKey="/home">
        <Button onClick={() => setAuth(!auth)}>SIGN IN</Button>
        <Button onClick={() => setAuth(!auth)}>SIGN UP</Button>
      </Nav>
      <Row className="d-flex align-items-center h-75 ">
        <Col xl={8} lg={6} md={6} sm={12} className="d-grid">
          <div id="logo">
            <img src={ico} alt="logo" height="200px" width="200px" />
          </div>
          <h1>INVOICE ME</h1>
          <h3 id="info">
            The Invoicing App allows you to keep a database of all the clients
            you have served. Its core functionality is for you to create
            invoices and schedule delivery dates to your clients to make timely
            payments.
          </h3>
        </Col>
        <Col
          xl={4}
          lg={6}
          md={6}
          sm={12}
          className="bg-white p-3 border shadow"
        >
          {auth ? <Login /> : <Register />}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
