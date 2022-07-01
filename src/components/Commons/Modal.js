import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from '../Commons/Modal.module.scss'


const Background = (props) => {
    return <div className={classes.background} onClick={props.onClose}/>
}

const ModalWindow = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('modal-window');
const Modal = (props) => {
    const [render, setRender] = useState(null);
    // if(!render) return null;
    console.log('modal', props);
  return (
    <>
        {ReactDOM.createPortal(<Background onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </>
  )
}

export default Modal