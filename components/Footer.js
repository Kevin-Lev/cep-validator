import Link from 'next/link';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Footer = () => (
    <div>
        <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
            <Navbar.Text className="mx-auto">© Wayne Enterprises</Navbar.Text>
        </Navbar>
    </div>
);

export default Footer;
