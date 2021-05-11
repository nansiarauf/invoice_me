import { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { userContext } from "../contexts/userContext";

const Login = () => {
  //SETTING STATES
  const { LoginUser } = useContext(userContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // //SETTING REDIRECT
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // // HOOK TO HANDLE THE REDIRECT RENDERING
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  //METHOD TO HANDLE SUBMIT ON THE LOGIN FORM
  function handleSubmit(e) {
    e.preventDefault();
    const login_user = {
      email,
      password,
    };
    LoginUser(login_user);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <Form.Control
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          className="mt-2 form-control"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="btn mt-2" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
