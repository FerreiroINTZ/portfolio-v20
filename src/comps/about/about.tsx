import styles from "./styles/main.module.scss"

import MainContent from "./mainContent/mainContent"

function about() {
  return (
    <section id={styles.aboutContainer}>
      <div id={styles.aboutBackground}>
        <img src="/public/icons/about/bg.jpeg" alt="background da secao sobre"/>
      </div>
      <div id={styles.sectionContent}>
        <div id={styles.sectionLabel}><img src="/public/icons/general/star.png" alt="star icon"/><p>sobre mim</p></div>
        <MainContent />
      </div>
    </section>
  )
}

export default about