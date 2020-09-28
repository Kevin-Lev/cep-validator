import Link from "next/link";
import { Jumbotron, Button, Container } from "react-bootstrap";


export default function Home() {
  return (
    <Container>
      <Jumbotron>
        <h1>Bem vindo ao Gotham Mail!</h1>
        <h6>
          O que você deseja fazer agora?
        </h6>
        <p style={{ marginTop: 30 }}>
          <Link href="http://localhost:3000/ceps/new">
            <Button variant="success">Quero cadastrar o meu CEP</Button>
          </Link>
          <Link href="http://localhost:3000/ceps">
            <Button variant="primary" style={{ marginLeft: 20 }} >Me mostre a lista de CEPs</Button>
          </Link>
        </p>
      </Jumbotron>
    </Container>
  )
}

