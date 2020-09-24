import React from 'react';
import { Row, Col, Label, Button, Container, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import TodoCard from "./TodoCard";
import AddEditComponent from "./AddEditComponent";
import Legends from "./Legends";

const ToDos = [
    {
        Id: 1,
        Title: "Monday checks",
        Description: "I have many things to look into. I dont have time to play or do party with others.",
        Status: "Todo"
    },
    {
        Id: 2,
        Title: "Tuesday checks",
        Description: "I have many things to look into. I dont have time to play or do party with others.",
        Status: "InProgress"
    }
];

class Home extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            todos: ToDos,
            modal: false
        };

        this.selectedTask = null;
        this.OnModalToggle = this.OnModalToggle.bind(this);
        this.addBtnClick = this.addBtnClick.bind(this);
    }

    OnModalToggle(e, data){
        if (data === null || data === undefined) {
            // When Cancel is clicked.
            this.selectedTask = null;
            this.setState({
                modal: !this.state.modal
            });
        }
        else{
            // When Add id clicked.

            let todos = this.state.todos;

            let selectedTodo = todos.find(x => x.Id === data.Id);
            if (selectedTodo === null || selectedTodo === undefined) {
                // Add new Task item

                let maxId = Math.max(...todos.map(x => x.Id));
                data.Id = maxId + 1;
                todos.push(data);
            }
            else{
                // Update existing task item.
                
                selectedTodo.Title = data.Title;
                selectedTodo.Description = data.Description;
                selectedTodo.Status = data.Status;
            }
            this.setState({
                todos: todos,
                modal: !this.state.modal
            });
        }
        this.selectedTask = null;
    }

    OnEditButtonClick(data){
        this.selectedTask = ToDos.find(x => x.Id === parseInt(data.target.id));
        this.setState({
            modal: true
        });
    }

    RenderTodoItems(){
        const arr = [];
        this.state.todos.map(todo => {
            arr.push(
                <TodoCard key={todo.Id} data={todo} onEditButtonClick={this.OnEditButtonClick.bind(this)} />
            );
        });
        return arr;
    }

    addBtnClick(e){
        this.setState({
            modal: true
        });
    }
    
    render(){
        return(
            <Container style={{border:"2px solid green"}}>
                <Legends onAddBtnClick={this.addBtnClick} />
                <Row>
                    {this.RenderTodoItems()}
                </Row>
                <AddEditComponent modal={this.state.modal} onModalToggle={this.OnModalToggle} task={this.selectedTask} />
            </Container>
        );
    }
}

export default Home;