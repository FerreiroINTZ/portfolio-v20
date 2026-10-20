import styles from "./styles/main.module.scss"

function foregroundElements() {
  return (
    <div id={styles.frontContentContainer}>
        <div>

        <div id={styles.titleWrapper}>
            <p id={styles.nameContainer}>Gabriel Felipe Ferreira de Oliveira</p>
            <h1 id={styles.titleContainer}>Full Stack</h1>
            <p id={styles.subTitleContainer}>codigo • arte • propostio</p>
        </div>
        <div id={styles.titleSeparator}>
            <span></span>
            <img src="/icons/general/star.png" alt="star icon"/>
        </div>
        <p id={styles.mainText}>
            Cada funcao lapidade como escultura. <br />
            Cada interface, uma obra.
        </p>
        </div>
        <div id={styles.socialContainer}>
            <div className={styles.socialLines} id={styles.socialLine_1}>
                <span></span>
                <img src="/icons/general/star.png" alt="star icon"/>
            </div>
            <div id={styles.socialCardsWrapper}>
                <div className={styles.socialCard}>
                    <img src="/icons/social/linkedin.png" alt="git hub icon"/>
                </div>
                <div className={styles.socialCard}>
                    <img src="/icons/social/github.png" alt="git hub icon"/>
                </div>
                <div className={styles.socialCard}>
                    <img src="/icons/social/email.png" alt="git hub icon"/>
                </div>
            </div>
            <div className={styles.socialLines}  id={styles.socialLine_2}>
                <img src="/icons/general/star.png" alt="star icon"/>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default foregroundElements