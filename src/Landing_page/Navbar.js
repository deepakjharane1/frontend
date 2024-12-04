import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div class="container p-1">
        <a class="navbar-brand" href="#">
          <img
            src="media/image/logomain.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item ">
                <a  class="nav-link active fw-medium text-secondary" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-medium text-secondary" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-medium text-secondary" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-medium text-secondary" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-medium text-secondary" aria-current="page" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
             </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
