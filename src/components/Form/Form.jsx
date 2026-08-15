import style from "./Form.module.css"

function Form({changeModal}) {
  const onSubmitForm = (event) => {
    event.preventDefault();

    changeModal();

    // console.log(localStorage.getItem("userName"));
    localStorage.setItem("userName", event.target.name.value);
  }

  return (
    <form className={style.form} onSubmit={onSubmitForm}>
      <label htmlFor="name" className={style.form_label}>Username</label>
      <input type="text" placeholder="Username" id="name" name="name" className={style.form_input} required/>
      <label htmlFor="email" className={style.form_label}>E-Mail</label>
      <input type="email" placeholder="E-Mail" id="email" name="email" className={style.form_input} required/>
      <label htmlFor="password" className={style.form_label}>Password</label>
      <input type="password" placeholder="Password" id="password" name="password" className={style.form_input} required/>
      <button type="submit" className={style.form_button}>Sign up</button>
    </form>
  );
}

export default Form;