
import { temizle } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";


const TodoList = () => {

 

  return (
    <div>
      <div>
        {[].map((gorev) => (
          <TodoItem key={gorev.id} />
        ))}

     
      </div>
      <div className="clear-wrapper">
        <button className="clear-button"
     
        
        
        >Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
