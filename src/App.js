import { Component } from "react";
import Form from "./components/Form/Form";
import TodoEditor from "./components/TodoEditor";
import Modal from "./components/Modal";
class App extends Component {
  state = {
    todos: "",
    showModal: false,
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

  toggleModal = () => {
    this.setState((prewState) => ({ showModal: !prewState.showModal }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleModal} type="button">
          Open
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <p>hello</p>
            <button onClick={this.toggleModal} type="button">
              Close
            </button>
          </Modal>
        )}

        <Form onSubmit={this.formSubmitHandler} />
        <TodoEditor onSubmit={this.addTodo} />
      </div>
    );
  }
}
export default App;
