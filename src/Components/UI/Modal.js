import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';
const BackDrop = props => {
    return <div className={classes.backDrop}></div>
}

const ModalOverlays = props => {
    return <div className={classes.modal}>
         <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return <Fragment>
        {ReactDom.createPortal(<BackDrop />, portalElement)}
        {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </Fragment>
}

export default Modal;