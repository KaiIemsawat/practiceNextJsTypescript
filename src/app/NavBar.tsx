"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
    const pathName = usePathname();

    return (
        <Navbar
            bg="primary"
            variant="dark"
            sticky="top"
            expand="sm"
            collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">
                    NextJS 13.4 Image Gall
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                {/* Whatever in  <Navbar.Collapse></Navbar.Collapse> will be responsive. In smaller screen will be turned to hambergur menu*/}
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link
                            as={Link} // use as link
                            href="/hello" // link to /hello
                            active={pathName === "/hello"} // highlight if pathname is hello
                        >
                            Hello
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
