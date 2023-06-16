import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'
import { Link } from 'react-router-dom';

export default function ItemCard(props) {
    // console.log(props.data)
    return (
        <>
            <div className="col-md-3">
                <Card>
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">ID - {props.data.id}</Card.Subtitle>
                        <Card.Text>
                           {props.data.description}
                        </Card.Text>
                        <Link to={`/products/${props.data.id}`}>See More</Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
