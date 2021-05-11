import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
