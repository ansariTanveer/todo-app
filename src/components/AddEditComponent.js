import React from 'react'
import {Modal, ModalHeader,ModalBody,ModalFooter, Button, Form, FormGroup, Label, Input} from 'reactstrap'

class AddEditComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            titleValue: "",
            descriptionValue: "",
            statusValue: ""
        };

        this.OnAddBtnClick = this.OnAddBtnClick.bind(this);
        this.OnCancelBtnClick = this.OnCancelBtnClick.bind(this);

        this.onTitleEntryTextChange = this.onTitleEntryTextChange.bind(this);
        this.onDescriptionEntryTextChange = this.onDescriptionEntryTextChange.bind(this);
        this.onStatusDropdownChange = this.onStatusDropdownChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.task !== this.props.task) {
            this.setState({
                titleValue: nextProps.task === null ? "" : nextProps.task.Title,
                descriptionValue: nextProps.task === null ? "" : nextProps.task.Description,
                statusValue: nextProps.task === null ? "Todo" : nextProps.task.Status
            });   
        }
    }

    OnAddBtnClick(e){
        let todoObject = {
            Id: this.props.task === null ? 0 : this.props.task.Id,
            Title: this.state.titleValue,
            Description: this.state.descriptionValue,
            Status: this.state.statusValue
        }
        this.props.onModalToggle(e, todoObject);

        this.clearCurrentState();
    }

    OnCancelBtnClick(e){
        this.props.onModalToggle(e, null);
        this.clearCurrentState();
    }

    onTitleEntryTextChange(e){
        this.setState({
            titleValue: e.target.value
        });
    }

    onDescriptionEntryTextChange(e){
        this.setState({
            descriptionValue: e.target.value
        });
    }

    onStatusDropdownChange(e){
        this.setState({
            statusValue: e.target.value
        });
    }

    clearCurrentState(){
        this.setState({
            titleValue: "",
            descriptionValue: "",
            statusValue: "Todo"
        });
    }

    render(){
        const {modal, onModalToggle} = this.props;

        return(
            <Modal isOpen={modal} toggle={onModalToggle} backdrop={"static"}>
                <ModalHeader toggle={onModalToggle}>
                    {this.state.titleValue}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" id="title" placeholder="Task title" value={this.state.titleValue} 
                                onChange={this.onTitleEntryTextChange} maxLength="30" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Task description</Label>
                            <Input type="textarea" id="description" placeholder="Task in details (Max 300 characters)" 
                                maxLength="300" value={this.state.descriptionValue} onChange={this.onDescriptionEntryTextChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="status">Task status</Label>
                            <Input type="select" id="status" value={this.state.statusValue} onChange={this.onStatusDropdownChange}>
                                <option value="Todo">To do</option>
                                <option value="InProgress">In progress</option>
                                <option value="Completed">Completed</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button id="addBtn" color='primary' onClick={this.OnAddBtnClick}>Add</Button>{' '}
                    <Button id="cancelBtn" color='secondary' onClick={this.OnCancelBtnClick}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default AddEditComponent;
