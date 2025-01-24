import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./ContactForm.css";

function ContactForm() {
    return (
        <>
            <div className="containerForm">
                <Card className="card-form">
                    <h1 className="center-textt">Контактирајте не</h1>
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
                            SEND MESSAGE
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    );
}

export default ContactForm;
