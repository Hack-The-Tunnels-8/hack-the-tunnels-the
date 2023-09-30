import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="./logo.png" alt="Carleton University Logo"></img>
          {/* For some reason the image is not displayed... */}
        </Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button className="navbar__button" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button className="navbar__button" onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button className="navbar__button" onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
