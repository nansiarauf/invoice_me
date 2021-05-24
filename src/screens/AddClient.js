import { Form, Button, Col, Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { ClientContext } from "../contexts/ClientContext";
import Footer from "../components/Footer";

const AddClient = ({ location }) => {
  const [businessName, setBusinessName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { registerClient } = useContext(ClientContext);

  //SETTING REDIRECT AFTER ADDING CLIENT
  // const user = localStorage.getItem("userInfo");
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  // useEffect(() => {
  //   if (user) {
  //     history.push(redirect);
  //   }
  // }, [history, user, redirect]);

  //METHOD TO HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    const newClient = {
      businessName,
      name,
      phone,
      email,
      address,
    };
    registerClient(newClient);
    console.log(newClient);
  }
  return (
    <Container className="d-flex justify-content-center">
      <Col xs={12} sm={12} md={6} lg={8}>
        <Form onSubmit={handleSubmit} className="data-form">
          <Form.Group>
            <h3 className="form-title">ADD CLIENT</h3>

            <Form.Control
              placeholder="Business Name"
              type="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Phone"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Address"
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="btn mt-2" type="submit">
            ADD CLIENT
          </Button>
        </Form>
        <Footer />
      </Col>
    </Container>
  );
};

export default AddClient;
