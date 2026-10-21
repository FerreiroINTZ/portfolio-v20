import styles from "../styles/main.module.scss"

function mainContent() {
  return (
    <div id={styles.mainContentContainer}>
        <div id={styles.sectionSideBarr}></div>
        
        <div id={styles.textSide}>
            <div id={styles.titleContainer}>
                <h2 id={styles.sectionTitle}>Quem sou eu</h2>
                <p id={styles.artistName}>gabriel felipe</p>
                <p id={styles.subtitleContainer}>desnevolvedor full-stack</p>
            </div>
            <p id={styles.textContainer}>Nao vejo o desenvolvimento apenas como construcao de software. E transformar ideias abstratas em algo que pode ser experimentado, utilisado e lembrado.</p>
            <div id={styles.divider}></div>
            <p id={styles.fraseDeEfeito}>
                Codigo e o meio. <br />
                A experiencia e o resultado
            </p>
        </div>

        <div id={styles.imgSide}>
            <img src="/public/icons/about/quadro_1.png" alt="main painting" />
        </div>
    </div>
  )
}

export default mainContent