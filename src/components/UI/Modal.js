import classes from './Modal.module.css'
import { React, Fragment} from "react";
import {createPortal} from "react-dom";

const Backdrop = (props) => {
    return (<div className={classes.backdrop} onClick={props.onClick}></div>)
}

const Modal = (props) => {

    return (<div className={classes.modal}>
        <div>{props.children}</div>
    </div>)
}


const ModalElement = document.getElementById('overlays')

const Overlays = (props) => {
    return (<Fragment>
        {createPortal(<Backdrop onClick={props.onClick}/>, ModalElement)}
        {createPortal( <Modal>{props.children}</Modal>, ModalElement)}
    </Fragment>)
}
export default Overlays;