import { Component } from "react";
import Form from "./components/Form/Form";
import TodoEditor from "./components/TodoEditor";

class App extends Component {
  state = {
    todos: "",
  };
  addTodo = (text) => {
    const todo = { text };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };
  formSubmitHandler = (data) => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };

  render() {
    
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <TodoEditor onSubmit={this.addTodo} />
      </div>
    );
  }
}
export default App;
