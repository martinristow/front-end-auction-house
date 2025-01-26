import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./ContactForm.css";

function ContactForm() {
    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Контактирајте не</h1>
                <Card className="card-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Емаил адреса</Form.Label>
                            <Form.Control type="email" placeholder="Внесете ја вашата емаил адреса" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Порака</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Внесете ја вашата порака"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="button23">
                            ПРАТИ ПОРАКА
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    );
}

export default ContactForm;
