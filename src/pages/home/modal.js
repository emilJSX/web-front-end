import React from "react";
import { ModalStyle } from "./Modal.Styled";

const Modal = () => {
    return(
        <>
        <ModalStyle>
            <div className="modal-bg">
                <div className="modal">
                    <h2>SUCCESS</h2>
                    <button>Close</button>
                </div>
            </div>
        </ModalStyle>
        </>
    )
}

export default Modal;