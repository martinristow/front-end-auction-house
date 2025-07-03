import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Slika1 from './../assets/1.jpg'
// import Slika2 from './../assets/2.jpg'
// import Slika3 from './../assets/3.jpg'
import "./MainFunctionalities.css"
function MainFunctionalities() {
    const image1 = "https://re1-s3-images.s3.eu-west-2.amazonaws.com/1.jpg"
    const image2 = "https://re1-s3-images.s3.eu-west-2.amazonaws.com/2.jpg"
    const image3 = "https://re1-s3-images.s3.eu-west-2.amazonaws.com/3.jpg"
    return (
        <>

            <h1 className="center-text">Главни функционалности</h1>
            <CardGroup className="dodaj_padding_margin">
                <Card className="dodaj_padding_margin">
                    <Card.Img variant="top" src={image2} className="custom-img"/>
                    <Card.Body>
                        <Card.Title className="center-text1">Креирање на аукции (само за администратори).</Card.Title>
                        <Card.Text className="center-text1">
                            Со нашата платформа, можете лесно да креирате аукции за продажба на уникатни уметнички дела. Поставете фотографии, описи и почетни цени за вашите предмети и дозволете на корисниците да поставуваат понуди.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dodaj_padding_margin">
                    <Card.Img variant="top" src={image1} className="custom-img" />
                    <Card.Body>
                        <Card.Title className="center-text1" >Ставање понуди во реално време.</Card.Title>
                        <Card.Text className="center-text1">
                            Уживајте во можноста да учествувате во аукции за ексклузивни и ретки предмети. Поставувајте понуди што се поголеми за 10 проценти од почетната понуда или последната понуда за да ја зголемите вашата шанса да победите.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dodaj_padding_margin">
                    <Card.Img variant="top" src={image3} className="custom-img"/>
                    <Card.Body>
                        <Card.Title className="center-text1">Автоматско прогласување на победници.</Card.Title>
                        <Card.Text className="center-text1">
                            Откако аукцијата ќе заврши, победникот ќе биде автоматски прогласен и ќе добие известување преку емаил со информација за тоа која понуда е победничка. Ова ќе ви помогне да останете информирани во секој момент.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    );
}

export default MainFunctionalities;