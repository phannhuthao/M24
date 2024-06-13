import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

const Color = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
];

type Todo = {
    id: number;
    tittle: string;
    status: boolean;
};

type StateType = {
    todos: Todo[];
    newTodoTitle: string;
};

export default class TodoList extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [
                { id: 1, tittle: "Rượi xọ người Tâm Anh", status: false },
                { id: 2, tittle: "Chơi ngải", status: true },
                { id: 3, tittle: "Cướp ngân hàng", status: false },
                { id: 4, tittle: "Trộm chó", status: false},
            ],
            newTodoTitle: ""
        };
    }
    componentDidMount() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            this.setState({ todos: JSON.parse(savedTodos) });
        }
    }

    componentDidUpdate(prevProps: {}, prevState: StateType) {
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        }
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ newTodoTitle: event.target.value });
    };

    addTodo = (event: React.FormEvent): void => {
        event.preventDefault();
        if (this.state.newTodoTitle.trim() === "") {
            return;
        }

        const newTodo: Todo = {
            id: this.state.todos.length + 1,
            tittle: this.state.newTodoTitle,
            status: false
        };

        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
            newTodoTitle: ""
        }));
    };

    deleteTodo = (id: number): void => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }));
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="m-3 p-2 border border-1 border-dark">
                    <h1>Danh sách công việc</h1>
                    <nav className="mb-3">
                        <Form onSubmit={this.addTodo}>
                            <Row>
                                <Col xs="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập công việc vào..."
                                        value={this.state.newTodoTitle}
                                        onChange={this.handleInputChange}
                                        className="mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Thêm</Button>
                                </Col>
                            </Row>
                        </Form>
                    </nav>
                    {
                        this.state.todos.map((todo) => {
                            // Màu ngẫu nhiên
                            let indexRandom = Math.floor(Math.random() * 8);

                            return (
                                <Alert key={todo.id} className="p-1 my-2" variant={Color[indexRandom]}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex gap-2">
                                            <Form.Check defaultChecked={todo.status} />
                                            <span className={todo.status ? 'text-decoration-line-through' : ''}>
                                                {todo.tittle}
                                            </span>
                                        </div>
                                        <div>
                                            <Button variant="warning me-3">Sửa</Button>
                                            <Button variant="danger" onClick={() => this.deleteTodo(todo.id)}>Xóa</Button>
                                        </div>
                                    </div>
                                </Alert>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
