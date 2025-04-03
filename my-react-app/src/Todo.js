import { Modal } from "./Modal";
import { useState } from "react";

const Todo = (props) => {
  const [ShowModal, setShowModal] = useState(false);

  const onDissmissModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div class="card-content">
        <h2>{props.title}</h2>
        <button onClick={() => { setShowModal(true) }} class="btn">Done</button>
      </div>
      {ShowModal && <Modal dismissModal={onDissmissModal}></Modal>}
    </>
  );
};

export default Todo;
