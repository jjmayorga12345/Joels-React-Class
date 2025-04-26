import { Modal } from "./Modal";
import { ModalV2 } from './ModalV2';
import { useState } from "react";

const Todo = (props) => {
    const [ShowModal, setShowModal] = useState(false);

    const onDissmissModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="card-content">
                <h2>{props.title}</h2>
                <button onClick={() => setShowModal(true)} className="btn">
                    Done
                </button>
            </div>
            {ShowModal && <ModalV2 dismissModal={onDissmissModal} />}
        </>
    );
};

export default Todo;
