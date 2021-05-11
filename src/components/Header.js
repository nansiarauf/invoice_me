import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import ico from "../images/ico.png";
const Header = () => {
  const { userInfo } = useContext(userContext);
  return (
    <header>
      <section className="header">
        <div className="brand-name d-flex align-items-center">
          <div id="h-logo">
            <img src={ico} alt="logo" height="90px" width="auto" />
          </div>
          <h2>INVOICE ME!</h2>
        </div>

        <section className="user-id">
          {userInfo ? <h6>{userInfo.email}</h6> : <h6>Not logged in</h6>}
        </section>
      </section>
    </header>
  );
};

export default Header;
