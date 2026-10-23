import styles from "../styles/main.module.scss"

function forms() {
  return (
    <form id={styles.formsContainer}>
      <img src="/public/icons/contact/forms_bg.png" alt="forms bg"/>
      <div id={styles.formFieldsWrapper}>
        
        <div id={styles.fromField}>
          <label>DE:</label>
          <input type="text"/>
        </div>

        <div id={styles.toField}>
          <label>PARA:</label>
          <p>gabrielferreiro963@gmail.com</p>
        </div>

        <div id={styles.subjectField}>
          <label>ASSUNTO:</label>
          <input type="text"/>
        </div>

        <div id={styles.contentField}>
          {/* <label>DE:</label> */}
          <textarea id=""></textarea>
        </div>
        <div id={styles.sendBtnContainer}>
          <button type="button">
            <img src="/public/icons/contact/celo.png" alt="celo"/>
            <p>enviar</p>
            <p>--&gt;</p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default forms