import React from 'react';
import {
    Card, CardText, CardBody, CardTitle, 
} from 'reactstrap';

const ListCard = ({ expenses }) => {
    return (
        
        <div id="card">
            {
                expenses.map(item => (
                    <Card key={item.id}>
                        <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>                            
                        </CardBody>
                        <img width="20%" src={item.url} alt="Card image" />
                        <CardBody>
                            <CardText>Price - {item.amount}</CardText>
                            <CardText>Quantity - {item.quantity}</CardText>
                            <CardText>Available - {item.available}</CardText>
                        </CardBody>
                    </Card>

                ))
            }

        </div>
    );
};

export default ListCard;

