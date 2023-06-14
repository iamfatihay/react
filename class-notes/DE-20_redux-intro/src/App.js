import { combineReducers, legacy_createStore as createStore } from "redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";

function App() {
 

const topluReducer=combineReducers({counterReducer:counterReducer,todoReducer:todoReducer})


const store=createStore(topluReducer)

  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
