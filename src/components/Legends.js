import React from 'react';
import {Row, Col, Label, Button} from "reactstrap";


const Legends = ({onAddBtnClick}) => {
    return(

        <Row>
            <Col lg="4"></Col>
            <Col lg="2">
                <Row>
                    <Col lg="2">
                        <div className="remarkDiv toDo marginTop5">

                        </div>
                    </Col>
                    <Col lg="10" className="textAlignLeft">
                        <Label for="exampleEmail">To do</Label>
                    </Col>
                </Row>
            </Col>
            <Col lg="2">
                <Row>
                    <Col lg="2">
                        <div className="remarkDiv inProgress marginTop5">

                        </div>
                    </Col>
                    <Col lg="10" className="textAlignLeft">
                        <Label for="exampleEmail">In progress</Label>
                    </Col>
                </Row>
            </Col>
            <Col lg="2">
                <Row>
                    <Col lg="2">
                        <div className="remarkDiv done marginTop5">

                        </div>
                    </Col>
                    <Col lg="10" className="textAlignLeft">
                        <Label for="exampleEmail">Done</Label>
                    </Col>
                </Row>
            </Col>
            <Col lg="2">
                <Button id="addBtn" className="addButton" color="primary" onClick={onAddBtnClick}>
                    Add new Task
                </Button>
            </Col>
        </Row>
    )
    
}

export default Legends;