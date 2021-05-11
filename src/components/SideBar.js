import { Link } from "react-router-dom";
import navlist from "../navlist.js";

const SideBar = () => {
  return (
    <nav className="main-side-bar">
      {navlist.map((nav, i) => (
        <Link
          className="link"
          key={i}
          to={`/dashboard${nav.link}`}
          // onClick={() => (window.location = nav.link)}
        >
          <div
            id={window.location.pathname === nav.link ? "active" : ""}
            className="nav-item"
          >
            <div className="nav-icon">{nav.icon}</div>
            <div className="nav-link">{nav.title}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default SideBar;
