import React from 'react';
import {Row, Col, Label, Button} from "reactstrap";


const Legends = ({onAddBtnClick}) => {
    return(
            <Row className="paddingLeft15">
                <Col lg="3">
                    <Row>
                        <div lg="2" className="toDo remarkDiv marginTop5"></div>
                        <Col lg="10">
                            <Label className="leftFloatItem">To do</Label>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3">
                    <Row>
                        <div className="inProgress remarkDiv marginTop5"></div>
                        <Col lg="10">
                            <Label className="leftFloatItem">In progress</Label>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3">
                    <Row>
                        <div lg="2" className="done remarkDiv marginTop5"></div>
                        <Col lg="10">
                            <Label className="leftFloatItem">Done</Label>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3">
                    <Button id="addBtn" className="addButton" color="primary" onClick={onAddBtnClick}>
                        Add new Task
                    </Button>
                </Col>
            </Row>
        )    
    }

export default Legends;