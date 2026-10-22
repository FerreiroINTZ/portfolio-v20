import styles from "../styles/main.module.scss"

function footer() {

    const sections = ["home", "sobre", "stack", "projetos"]
    const social = ["git hub", "linkedin", "email"]

  return (
    <div id={styles.footerContainer}>
        <div id={styles.footerBorderLine}>
            <div id={styles.line}></div>
            <div id={styles.circle}></div>
        </div>

        <div id={styles.footerBg}>
            <img src="/public/icons/contact/bg.jpeg" alt="footer background" />
        </div>

        <div id={styles.sectionsContainer}>
            {sections.map((item, indx) => 
                <p key={indx}>{item}</p>
            )}
        </div>
        <div id={styles.footerTitleWrapper}>
            <p id={styles.footerTitle}>Este e o fim da experiencia</p>
            <p id={styles.footerSubtitle}>Mas nao precisa ser o fim da conversa.</p>
        </div>
        <div id={styles.footerThirdPart}>
            <div id={styles.socialOptions}>
                {social.map((item, indx) =>
                    <p key={indx}>{item}</p>
                )}
            </div>
            <div id={styles.goToStartBtn}>
                <img src="/public/icons/contact/arrow.png" alt="seta pra cima"/>
                <p>voltar ao inicio</p>
            </div>
        </div>
    </div>
  )
}

export default footer