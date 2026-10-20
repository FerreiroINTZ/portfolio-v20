import styles from "./styles/main.module.scss"
import Social from "./social"

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
        <div id={styles.sectionsContainer}>
            nada
        </div>
    </div>
    <Social />
    </div>
  )
}

export default foregroundElements