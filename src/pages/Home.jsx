import React, { useState } from "react";
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import {Container, List} from "@mui/material";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

    return (
    <Container maxWidth="xs" sx={{ marginTop: '1rem' }}>
      <Form addTodo={addTodo} />
        <List sx={{ marginTop: '1rem' }}>
            {todos.map((todo) => (
                <div key={todo.id} style={{marginTop: '0.8rem'}}>
                    <TodoItem todo={todo} deleteTodo={deleteTodo} />
                </div>
            ))}
        </List>
    </Container>
    )
}