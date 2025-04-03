import './App.css';
import Todo from './Todo';
import { Modal, Joel } from "./Modal";
import { BasicForm } from './BasicForm';

function App() {
  return (
    <div class="todo-container">
      <div class="card">
        <Todo title="Learn React"></Todo>
        <Todo title="Practice React"></Todo>
        <Todo title="Learn React part 2"></Todo>
      </div>
      <BasicForm></BasicForm>
    </div>
  );
}

export default App;

//PR Request