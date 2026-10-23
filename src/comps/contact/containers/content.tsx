import styles from "../styles/main.module.scss"

function content() {
  return (
    <div id={styles.textContainer}>
        <div id={styles.sectionTitle}>
            <h2>Entre em <br />contato</h2>
            <p>Pronto para construir algo <br />grandioso juntos?</p>
        </div>
        <p id={styles.mainText}>Se voce tem uma ideia, projeto ou apenas quer trocar uma ideia, me envie uma mensagem. <br /> Seria um prazer conversar.</p>
        <div id={styles.textAreaSeparator}></div>
        <div id={styles.contactContainer}>
            <div className={styles.socialCard}><img src="/public/icons/contact/social/github.png" alt="github icon"/></div>
            <div className={styles.socialCard}><img src="/public/icons/contact/social/linkedin.png" alt="github icon"/></div>
            <div className={styles.socialCard}><img src="/public/icons/contact/social/email.png" alt="github icon"/></div>
        </div>
    </div>
  )
}

export default content