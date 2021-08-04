import { useState, useRef, useEffect } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";

import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("#fff");

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const changeTheme = (status) => {
    if (status) {
      setColor("#fff");
    } else {
      setColor("#000");
    }
  };
  const inputEl = useRef("");
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div className="Wrapper">
      <button onClick={toggleModal} type="button">
        Open
      </button>

      <label>
        change text
        <input ref={inputEl} placeholder="enter text" />
      </label>

      {modal && (
        <Modal onClose={toggleModal} color={color}>
          <Checkbox changeTheme={changeTheme} />
          <hr />
          <button
            style={{ marginTop: "250px" }}
            onClick={toggleModal}
            type="button"
          >
            <b>CLOSE</b>
          </button>
        </Modal>
      )}
    </div>
  );
};
export default App;
