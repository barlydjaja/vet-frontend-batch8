import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo from "./header-logo.svg";
import "./Header.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { checkLogin } from "../Helper";

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const toggleIsOpen = () => setIsOpen(!isOpen);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
    setIsOpen(!isOpen);
  };

  const checkUser = () => {
    if (!checkLogin()) {
      return (
        <>
          <NavLink href="/register" className="text-white btn">
            <h5 className="mb-0 ml-3" style={{ fontWeight: "bold" }}>
              Register
            </h5>
          </NavLink>

          <NavLink
            href="/login"
            className="nav-link btn btn-warning ml-2"
            style={{ borderRadius: "20px" }}
          >
            LOGIN
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret className="text-white ">
              <h5 style={{ display: "inline" }}>
                <AccountCircleIcon className="mr-2" />
                Hi,Alex
              </h5>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <ExitToAppIcon />
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </>
      );
    }
  };

  return (
    <>
      <div className="background">
        <Container fluid={true}>
          <Navbar dark expand="md">
            <NavbarBrand href="/">
              <img src={logo} alt="" />
              <span className="logo-text ml-4">VET</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="text-white" />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/chat/"
                    className="text-white align-items-center justify-content-center"
                  >
                    <h5 className="mb-0">Chat Klinik</h5>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/dokter/" className="text-white">
                    <h5 className="mb-0 ml-3">Khusus Dokter</h5>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/klinik/" className="text-white">
                    <h5 className="mb-0 ml-3">Cari Klinik</h5>
                  </NavLink>
                </NavItem>
              </Nav>
              {checkUser()}
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

export default Header;
