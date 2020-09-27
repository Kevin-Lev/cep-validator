import { Table, Container, Row, Col } from 'react-bootstrap'


const CepList = () => (
    <Container style={{ marginTop: 170 }}>
        <Row className="justify-content-center">
            <h5>CEPs cadastrados</h5>
        </Row>
        <Row className="justify-content-center">
            <Table responsive size="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>CEP</th>
                        <th>Cidade</th>
                    </tr>
                </thead>  
            </Table>
        </Row>

        <style jsx>{`
            tr th {
                text-align: center;
            }
        `}
        </style>

    </Container>

)

export default CepList

