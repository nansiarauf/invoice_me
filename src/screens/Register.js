import { useState, useContext, useEffect } from "react";
import { userContext } from "../contexts/userContext";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";

const Register = ({ history }) => {
  const { RegisterUser, userInfo } = useContext(userContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [businessName, setBusinessName] = useState();

  //LOG IN AFTER REGISTRATION SUCCESS
  // const user = localStorage.getItem("userInfo");

  useEffect(() => {
    if (userInfo) {
      <Redirect to="/dashboard" />;
    }
  }, [userInfo, history]);
  //HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      businessName,
    };
    RegisterUser(newUser);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <Form.Control
          className="mt-2"
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          className="mt-2"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          className="mt-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control
          className="mt-2"
          placeholder="Business Name"
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <Button className="btn mt-2" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
