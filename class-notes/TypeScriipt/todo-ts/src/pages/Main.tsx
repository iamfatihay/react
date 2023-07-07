import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import axios from "axios";
import { notify } from "../helper/sweetAlert";

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
      notify("Todo successfully created","success")
      getTodos();
    } catch (error) {
     notify("Todo not successfully created","error")
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
  const deleteTodo:DeleteFn = async (id) => {
    try {
        await axios.delete(`${url}/${id}`);
        notify("Todo successfully deleted","success")
        getTodos()
    } catch (error) {
        notify("Todo not successfully deleted","error")
        console.log(error);     
    }
  };

  const toggleTodo:ToggleFn = async (item) => {
    try {
        await axios.put(`${url}/${item.id}`, {...item, isDone:!item.isDone});
        notify("Todo successfully updated","success")
        getTodos()
    } catch (error) {
        notify("Todo not successfully updated","error")
        console.log(error);     
    }
  };

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
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </Container>
  );
};

export default Main;
