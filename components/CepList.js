import { Table, Container, Row } from 'react-bootstrap'


const CepList = ({ ceps }) => (
    <Container style={{ marginTop: 120, marginBottom: '20%', width: '60%'}}>
        <Row className="justify-content-center">
            <h4>Lista de CEPs cadastrados</h4>
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

