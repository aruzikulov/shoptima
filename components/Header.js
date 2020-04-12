import Link from "next/link";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">SHOPTIMA</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/" passHref>
                  <NavLink>HOME</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about" passHref>
                  <NavLink>ABOUT</NavLink>
                </Link>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href="/import" passHref>
                      <NavLink>Import</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/export" passHref>
                      <NavLink>Export</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href="/consulting" passHref>
                      <NavLink>Consulting</NavLink>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  PRODUCTS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href="/chinese" passHref>
                      <NavLink>Chinese</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/uzbek" passHref>
                      <NavLink>Uzbekistan</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href="/international" passHref>
                      <NavLink>International</NavLink>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <Link href="/contact" passHref>
                  <NavLink>CONTACT US</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="https://www.shoptima.com.cn" passHref>
                  <NavLink>English</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
