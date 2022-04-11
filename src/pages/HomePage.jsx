import React from "react";
import { useSelector } from "react-redux";
import './HomePage.css'

export const HomePage = () => {

  const {user} =  useSelector(state=>state);

  if(user){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Navbar
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>



      <div className="section">
  <div className="container">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="card">
          <div className="header">
            <div className="avatar">
              <img src={user.avatar} alt="" />
            </div>
          </div>
          <div className="card-body">
            <div className="user-meta has-text-centered">
              <h3 className="username ">Hello , {user.name}</h3>
              <h5 className="user-bio has-text-centered">You are registered with <br/> {user.email}</h5>
            </div>
            <div className="user-bio has-text-centered">
              <p>Your Phone no is <br/> {user.phone}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

    </>
  );
} else{
  return ""
}
};
