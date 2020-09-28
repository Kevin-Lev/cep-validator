import Header from "../../components/Header";
import CepInput from "../../components/CepInput";
import { Form, Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Button } from 'react-bootstrap'


export default function NewCep() {
    const [form, setForm] = useState({ numbers: '', city: ''})

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({})
    const router = useRouter()

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createCep()
                alert('Success')
            }
            else {
                setIsSubmitting(false)
            }
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true)
    }

    const handleChange = (event) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const validate = () => {
        let err = {}

        if (!form.numbers) {
            err.numbers = "Você precisa inserir um CEP"
        }

        if (!form.city) {
            err.city = "Você precisa inserir uma cidade"
        }

        return err
    }

    console.log('errors')
    console.log(errors)

    const createCep = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/ceps', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            console.log('res Post')
            console.log(res)
            router.push("/ceps")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Header />
            <Container style={{ marginTop: 170 }}>
                <Row className="justify-content-center">
                    <h4 style={{ marginBottom: 15 }}>Validador de CEP</h4>
                </Row>
                    <Row className="justify-content-center">
                        {
                            isSubmitting 
                                ? <Loader active inline='centered' />
                                : 
                            <Row>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Form.Input 
                                                fluid
                                                error={errors.numbers ? {
                                                    content: 'Por favor, insira um CEP', 
                                                    pointiing: 'below' } : null}
                                                label="Digite o seu CEP"
                                                placeholder="CEP"
                                                name="numbers"
                                                type="text"
                                                onChange={handleChange}
                                                style={{ marginBottom: 20}}
                                            />
                                        </Row>
                                        <Row>
                                            <Form.Input 
                                                fluid
                                                label="Digite o nome da sua cidade"
                                                error={errors.city ? {
                                                    content: 'Por favor, insira uma cidade',
                                                    pointiing: 'below'
                                                } : null }
                                                placeholder="Cidade"
                                                name="city"
                                                onChange={handleChange}
                                                type="text"
                                                style={{ marginBottom: 20 }}
                                            />
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Button type="submit" variant="success">
                                                Cadastrar
                                            </Button>
                                        </Row>
                                    </Form>
                            </Row>
                        }
                    </Row>
            </Container>

            {/* <CepInput isSubmitting={isSubmitting} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/> */}
        </>
    )
}