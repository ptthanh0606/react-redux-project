import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container py-4 d-flex justify-content-between align-items-center">
          <span className="text font-weight-bolder">
            <Link style={{ textDecoration: "none" }} to="/">
              PTDevRoad
            </Link>
          </span>
          <Nav as="ul">
            <Nav.Item as="li" className="ml-3">
              <Nav.Link>
                <Link
                  to="/explore"
                  className="text text-dark text-hover-primary"
                >
                  Explore
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="ml-3">
              <Nav.Link>
                <Link to="/tasks" className="text text-dark text-hover-primary">
                  Tasks
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="ml-3">
              <Nav.Link>
                <Link
                  to="/contact"
                  className="text text-dark text-hover-primary"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link>
                <Link
                  to="/sign-in"
                  className="text text-dark text-hover-primary"
                >
                  Sign in
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="ml-3">
              <Button variant="outline-primary">Create an account</Button>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default React.memo(HeaderNav);
