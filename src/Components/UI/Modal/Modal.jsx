import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";
import PropTypes from "prop-types";
function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog className={classes.modal} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};
export default Modal;
