import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Row, Button, Form, Alert } from 'react-bootstrap';
import Link from 'next/link';

export default function NewCep() {
    const [form, setForm] = useState({ numbers: '', city: '' });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createCep();
            } else {
                setIsSubmitting(false);
            }
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
        setShowAlert(true);
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const validate = () => {
        let err = {};

        if (!form.numbers) {
            err.numbers = 'Você precisa inserir um CEP.';
        }

        if (!OnlyHasNumbers(form.numbers)) {
            err.notOnlyNumbers = 'Você deve digitar apenas números.';
        }

        if (hasOddAlternation(form.numbers)) {
            err.hasOddAlternation = 'Há alternância de pares no seu CEP.';
        }

        if (!form.city) {
            err.city = 'Você precisa inserir uma cidade.';
        }

        return err;
    };

    const OnlyHasNumbers = (input) => {
        return /^\d+$/.test(input);
    };

    const hasOddAlternation = (input) => {
        for (let i = 0; i < input.length; i++) {
            const oddRegexValidation = new RegExp(
                `${input.charAt(i)}` + '\\d' + `${input.charAt(i)}`,
                'i'
            );

            if (oddRegexValidation.test(input)) {
                return true;
            }
        }
        return false;
    };

    const createCep = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/ceps', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Container style={{ marginTop: 170, marginBottom: 170 }}>
                <Row className="justify-content-center">
                    <Form onSubmit={handleSubmit}>
                        <h4>Validador de CEP</h4>
                        <Form.Group controlId="formCep">
                            <Form.Label>Digite o CEP de onde você mora</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="CEP"
                                name="numbers"
                                maxLength="6"
                                minLength="6"
                                onChange={handleChange}
                                isInvalid={
                                    errors.numbers ||
                                    errors.notOnlyNumbers ||
                                    errors.hasOddAlternation
                                }
                                isValid={
                                    form.numbers &&
                                    form.numbers.length === 6 &&
                                    OnlyHasNumbers(form.numbers)
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.numbers ||
                                    errors.notOnlyNumbers ||
                                    errors.hasOddAlternation}
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                Digite números entre 100000 e 999999, sem hífen.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formCity">
                            <Form.Label>Digite o nome da sua cidade</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cidade"
                                name="city"
                                onChange={handleChange}
                                isInvalid={errors.city}
                                isValid={form.city}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row className="justify-content-center">
                            <Button variant="success" type="submit">
                                Cadastrar CEP
                            </Button>
                        </Row>
                    </Form>
                </Row>
                <Row className="justify-content-center">
                    <Alert show={showAlert} style={{ marginTop: 30 }} variant="success">
                        O CEP foi cadastrado com sucesso!{' '}
                        <Link href="http://localhost:3000/ceps">Clique aqui</Link> para vê-lo na
                        lista de CEPs!
                    </Alert>
                </Row>
            </Container>
        </>
    );
}
