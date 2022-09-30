import React, { useState } from "react";
import {Button, Paper, TextField} from "@mui/material";

export default function Form({addTodo}) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = {
            text: text,
            id: id
        };

        if (!text == '' || !text == null) {
            setId(id +1);
            addTodo(todoObj);
            setText(null);
            document.getElementById("outlined-basic").value = null;
        }
    }

 return (
     <Paper sx={{ padding: '1rem' }}>
        <TextField 
            id="outlined-basic" 
            label="Add item" 
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
        />
        <Button 
            variant="text" 
            onClick={() => todoCreate(text)}
        >Add</Button>
     </Paper>
 );
}
