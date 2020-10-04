import React from "react";
import { Row, Col, Button, Container, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const TodoCard = ({data, onEditButtonClick}) => {
    
    const {Id, Title, Description, Status} = data;

    let statusColorClass;
    switch (Status) {
        case "Todo":
            statusColorClass = "toDo";
            break;
        case "InProgress":
            statusColorClass = "inProgress";
            break;
        case "Completed":
            statusColorClass = "done";
            break;
    }

    return(
        <Col xs="10" sm="6" md="4" lg="4" id={Id} className="marginTop20">
            <Card>
                <CardHeader className={statusColorClass + " cardHeader"}>{Title}</CardHeader>
                <CardBody className="textAlignLeft">
                    <CardText>
                        {tailTruncate(Description)}
                    </CardText>
                </CardBody>
                <CardFooter className={statusColorClass}>
                    <Button id={Id} className="col-lg-12 editButton" color="primary" onClick={onEditButtonClick}>Edit</Button>
                </CardFooter>
            </Card>
        </Col>
    );
}

function tailTruncate(body){
    if (body.length > 50) {
        return body.substring(0, 60) + "...";   
    }
    return body;
}

export default TodoCard;