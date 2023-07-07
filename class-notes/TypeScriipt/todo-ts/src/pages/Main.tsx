import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import axios from "axios";

// interface TodoType{
//     id:string | number,
//     task:string,
//     isDone:boolean;
// }

const url = "https://64a6e9dc096b3f0fcc80d3a1.mockapi.io/todos";

const Main = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  // type AddFn=(text:string)=>void;

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // const AddTodo=async(text:string)=>{
  //     const newTodo=[
  //         task:text,
  //         isDone:false
  //     ]
  //     try {
  //         await axios.post(url,newTodo);
  //         getTodos();
  //     } catch (error) {

  //     }
  // }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography
        color="error"
        variant="h2"
        component={"h1"}
        align="center"
        mt={3}
      >
        Todo App with Typescript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} />
    </Container>
  );
};

export default Main;
