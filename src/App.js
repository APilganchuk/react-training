import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";

import Modal from "./components/Modal";

const App = () => {
  const [modal, setmodal] = useState(false);
  const [color, setColor] = useState("#fff");

  const toggleModal = () => {
    setmodal((prevState) => !prevState);
  };

  const changeTheme = (staus) => {
    if (staus) {
      setColor("#fff");
    } else {
      setColor("#000");
    }
  };

  const fnA = (a) => a + 5;
  const r = fnA(2);

  return (
    <div className="Wrapper">
      <button onClick={toggleModal} type="button">
        Open
      </button>

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
