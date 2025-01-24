import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./WhyUseThisPlatform.css";

function WhyUseThisPlatform() {
    return (
        <>
            <h1 className="center-text">Зошто да ја користите оваа платформа?</h1>
            <Row className="justify-content-center container-fluid">
                <Col md={4}>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title>Сигурност и транспарентност</Card.Title>
                            <Card.Text>
                                Нашата платформа гарантира дека сите аукции се водат на правичен и транспарентен начин. Секој корисник има еднаква можност да учествува, додека вашите податоци и понуди се целосно заштитени.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title>Понуди во реално време</Card.Title>
                            <Card.Text>
                                Следете ги аукциите и ставете понуди во реално време без никакви доцнења. Секогаш ќе знаете која е актуелната највисока понуда, што ви дава предност да реагирате брзо.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title>Лесен пристап од сите уреди</Card.Title>
                            <Card.Text>
                                Платформата е оптимизирана за сите видови уреди – компјутери, таблети и мобилни телефони. Без разлика каде се наоѓате, можете да креирате аукции или да учествувате во нив со само неколку клика.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default WhyUseThisPlatform;
