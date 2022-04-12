import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";
import { logOut } from "../redux/action/action";
import AppLogo from "../assets/images/user_management_app_logo.png";
export const HomePage = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  if (user) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container navbarcontainer">
            <a className="navbar-brand" href="/#">
              <img src={AppLogo} alt="" width="50px" height="50px" />
            </a>
            <a className="navbar-brand" href="/#">
              User Management App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={() => dispatch(logOut())}
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="section">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <div className="card">
                <div className="header">
                  <div className="avatar">
                    <img src={user.avatar} alt="" className="avatar" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="user-meta has-text-centered">
                    <h3 className="username ">Hello , {user.name}</h3>
                    <h5 className="user-bio has-text-centered">
                      You are registered with <br /> {user.email}
                    </h5>
                  </div>
                  <div className="user-bio has-text-centered">
                    <p>
                      Your Phone no is <br /> {user.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default HomePage;
