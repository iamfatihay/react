
import { useDispatch, useSelector } from "react-redux";
import { temizle } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";


const TodoList = () => {

 const gorevler1=useSelector((state)=>state.todoReducer.gorevler)
 const dispatch=useDispatch()
//  console.log(gorevler1);

  return (
    <div>
      <div>
        {gorevler1.map((gorev) => (
          <TodoItem key={gorev.id} gorev={gorev}/>
        ))}

     
      </div>
      <div className="clear-wrapper">
        <button className="clear-button"
        onClick={()=>dispatch(temizle())}
        
        
        >Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
