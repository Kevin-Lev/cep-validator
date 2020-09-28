import Head from 'next/head'
import Link from 'next/link'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => (
    <div style={{ marginBottom: '5%' }}>
        <Head>
            <title>Gotham City - Validador de CEP</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Validador de CEP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Opções do usuário" id="collasible-nav-dropdown">
                        <Link href="/ceps/new">
                            Cadastrar CEP
                        </Link>
                        <NavDropdown.Divider />
                        {/* <NavDropdown.Item> */}
                            <Link href="/ceps">
                                Lista de CEPs
                            </Link>
                        {/* </NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)


export default Header