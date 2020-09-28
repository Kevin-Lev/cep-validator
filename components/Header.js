import Head from 'next/head'
import Link from 'next/link'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => (
    <div style={{ marginBottom: '5%' }}>
        <Head>
            <title>Gotham City Mail - Validador de CEP</title>
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Gotham Mail</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Opções do usuário" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link href="/ceps/new">
                                <a style={{ color: 'black' }}>
                                    Cadastrar CEP
                                </a>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link href="/ceps">
                                <a style={{ color: 'black' }}>
                                    Lista de CEPs
                                </a>
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)


export default Header