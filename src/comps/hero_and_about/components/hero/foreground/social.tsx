import styles from "../styles/main.module.scss"

function social() {
  return (
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
  )
}

export default social