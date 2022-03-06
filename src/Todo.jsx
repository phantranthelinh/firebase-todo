import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase-config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

function TodoListItem({ todo, inprogress, id }) {
  const toggleInprogress = () => {
    const todo = doc(db, "todos", id);
    const newTodo = { inprogress: !inprogress };
    updateDoc(todo, newTodo);
  };

  const deleteTodo = async () => {
    const todo = doc(db, "todos", id);
    await deleteDoc(todo);
  };

  return (
    <>
      <List
        style={{
          width: "100%",
          maxWidth: "360px",
          bgcolor: "background.paper",
        }}
      >
        <ListItem key={id}>
          <ListItemText
            primary={todo}
            secondary={inprogress ? "In Progress" : "Completed"}
          ></ListItemText>
          <Button onClick={toggleInprogress}>
            {inprogress ? "Done" : "UnDone"}
          </Button>
          <Button onClick={deleteTodo}>X</Button>
        </ListItem>
      </List>
    </>
  );
}

export default TodoListItem;
