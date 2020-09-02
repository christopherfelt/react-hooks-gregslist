import React from "react";
import { Cars } from "../cars";
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      {isAuthenticated && <h1>User: {user.name}</h1>}

      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="cars-tab"
                  data-toggle="tab"
                  href="#cars"
                  role="tab"
                  aria-controls="cars"
                  aria-selected="true"
                >
                  Cars
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="houses-tab"
                  data-toggle="tab"
                  href="#houses"
                  role="tab"
                  aria-controls="houses"
                  aria-selected="false"
                >
                  Houses
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="jobs-tab"
                  data-toggle="tab"
                  href="#jobs"
                  role="tab"
                  aria-controls="jobs"
                  aria-selected="false"
                >
                  Jobs
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane p-3 fade show active"
                id="cars"
                role="tabpanel"
                aria-labelledby="cars-tab"
              >
                <Cars />
              </div>
              <div
                className="tab-pane p-3 fade"
                id="houses"
                role="tabpanel"
                aria-labelledby="houses-tab"
              ></div>
              <div
                className="tab-pane p-3 fade"
                id="jobs"
                role="tabpanel"
                aria-labelledby="jobs-tab"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
