import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const CepInput = ({ isSubmitting, handleSubmit, handleChange, errors }) => (
    <Container style={{ marginTop: 170 }}>
        <Row className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCep">
                    <Form.Label>Digite o CEP de onde você mora</Form.Label>
                    <Form.Control type="text" placeholder="CEP" min="100001" max="999999" isInvalid={errors.numbers}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.numbers}  
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Digite valores de CEP entre 100000 e 999999.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label>Digite o nome da sua cidade</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" />
                </Form.Group>
                <Row className="justify-content-center">
                    <Button variant="primary" type="submit">
                        Cadastrar CEP
                    </Button>
                </Row>
            </Form>
        </Row>
    </Container>
)


export default CepInput