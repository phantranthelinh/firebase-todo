import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { Button, Box } from "@material-ui/core";
import { db } from "./firebase-config";
import TodoListItem from "./Todo";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "@firebase/firestore";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const todoCollectionRef = collection(db, "todos");
  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todoCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTodos();
  }, [todos]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(todoCollectionRef, {
      todo: todoInput,
      inprogress: true,
      timestamp: serverTimestamp(),
    });
    setTodoInput("");
  };

  return (
    <div className="App  font-quick  ">
      <div className=" flex flex-col justify-center items-center w-full">
        <h1 className="font-bold py-4 text-5xl text-purple-700 mb-6">
          jkjk Todo's App
        </h1>
        <form>
          <TextField
            value={todoInput}
            id="standard-basic"
            onChange={(e) => setTodoInput(e.target.value)}
            label="Write a todo"
            style={{ width: "90vw", maxWidth: "360px" }}
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>

        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id}
          ></TodoListItem>
        ))}
      </div>
    </div>
  );
}

export default App;
