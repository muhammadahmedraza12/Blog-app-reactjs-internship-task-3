import React from "react";
import { Link } from "react-router-dom";
import transitions from "bootstrap";
import logoImage from "../navlogo.png";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid bg-dark  padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <img
              src={logoImage}
              alt="Logo"
              style={{
                width: "70px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <button
              style={{ borderColor: "white" }}
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span style={{ color: "white" }} className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li className={`nav-item nav-link ${active === "home" ? "active" : ""}`} onClick={() => setActive("home")}>Home</li>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                  <li className={`nav-item nav-link ${active === "blogs" ? "active" : ""}`} onClick={() => setActive("blogs")}>Blogs</li>
                </Link>
                <Link to="/create" style={{ textDecoration: "none" }}>
                  <li className={`nav-item nav-link ${active === "create" ? "active" : ""}`} onClick={() => setActive("create")}>Create</li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li className={`nav-item nav-link ${active === "about" ? "active" : ""}`} onClick={() => setActive("about")}>About</li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px", color: "white" }}>{user?.displayName}</p>
                      <li className="nav-item nav-link" onClick={handleLogout}>Logout</li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li className={`nav-item nav-link ${active === "login" ? "active" : ""}`} onClick={() => setActive("login")}>Login</li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
