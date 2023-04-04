
import React, { useState } from "react";
import "../App.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, LinkToNames, count, setCount }) => {


    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Dialog</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        Another way to increment the count:-
                    </div>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            {/* <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                                Delete
                            </button> */}
                            <LinkToNames className = "primaryBtn" to={`names/${count}`}> Names </LinkToNames>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;