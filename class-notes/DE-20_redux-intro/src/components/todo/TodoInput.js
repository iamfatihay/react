import { useDispatch, useSelector } from "react-redux";

import {ekle} from "../../redux/actions/todoActions"
const TodoInput = () => {

const gorevler2=useSelector((state)=>state.todoReducer.gorevler)

const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
       
   dispatch(ekle(gorevler2.yazi)); 

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        // value={gorevler2.yazi}

onChange={(e)=>gorevler2.yazi=e.target.value}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
