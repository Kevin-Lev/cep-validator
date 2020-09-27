import { Table, Container, Row, Col } from 'react-bootstrap'


const CepList = ({ ceps }) => (
    <Container style={{ marginTop: 120, width: '60%'}}>
        <Row className="justify-content-center">
            <h5>CEPs cadastrados</h5>
        </Row>
        <Row className="justify-content-center">
            <Table style={{ textAlign: 'center' }} responsive size="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>CEP</th>
                        <th>Cidade</th>
                    </tr>
                </thead> 
                {ceps.map(row => 
                <tbody key={row._id}>
                    <tr>
                        <td>{ row.numbers }</td>
                        <td>{ row.city }</td>
                    </tr>
                </tbody>
                )} 
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

