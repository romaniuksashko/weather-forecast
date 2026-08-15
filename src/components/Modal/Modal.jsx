import Form from "../Form/Form";
import style from "./Modal.module.css"

function Modal({changeModal}) {
  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      changeModal()
    }
  };

  return (
    <div className={style.modal_overlay} onClick={closeModal}>
      <div className={style.modal_background}>
        <h2 className={style.modal_title}>Sign up</h2>
        <Form changeModal={changeModal} />
        <p className={style.modal_question}>
          Already have an account? {""}
          <span className={style.modal_change}>Log In</span>
        </p>
      </div>
    </div>
  );
}

export default Modal;