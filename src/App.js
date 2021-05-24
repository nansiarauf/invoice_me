import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
