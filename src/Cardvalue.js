import React from "react";
import pigs1 from '../src/pigphotos/largeyashi.jpg';
import Card from 'react-bootstrap/Card';

function Cardvalue() {
    const Data = [
        {
            title: "title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."

        }, {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."

        },
        {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."

        }, {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."

        }
    ]

    const SmallCard = (props) => {
        return (<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pigs1} alt='' />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}  </Card.Text>
            </Card.Body>
        </Card>

        );
    }


    return (
        <>
            {Data.map((data, index) =>
                <SmallCard key={index} title={data.title} text={data.text} />
            )}

        </>
    )

}
export default Cardvalue;