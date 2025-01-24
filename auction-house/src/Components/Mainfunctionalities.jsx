import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Slika1 from './../assets/1.jpg'
import Slika2 from './../assets/2.jpg'
import Slika3 from './../assets/3.jpg'
import "./MainFunctionalities.css"
function MainFunctionalities() {
    return (
        <>

            <h1 className="center-text">Главни функционалности</h1>
            <CardGroup className="dodaj_padding_margin">
                <Card className="dodaj_padding_margin">
                    <Card.Img variant="top" src={Slika2} className="custom-img"/>
                    <Card.Body>
                        <Card.Title className="center-text1">Креирање на аукции (само за администратори).</Card.Title>
                        <Card.Text className="center-text1">
                            Со нашата платформа, можете лесно да креирате аукции за продажба на уникатни уметнички дела. Поставете фотографии, описи и почетни цени за вашите предмети и дозволете на корисниците да поставуваат понуди.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dodaj_padding_margin">
                    <Card.Img variant="top" src={Slika1} className="custom-img" />
                    <Card.Body>
                        <Card.Title className="center-text1" >Ставање понуди во реално време.</Card.Title>
                        <Card.Text className="center-text1">
                            Уживајте во можноста да учествувате во аукции за ексклузивни и ретки предмети. Поставувајте понуди што се поголеми од почетната понуда или последната понуда за да ја зголемите вашата шанса да победите.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="dodaj_padding_margin">
                    <Card.Img variant="top" src={Slika3} className="custom-img"/>
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