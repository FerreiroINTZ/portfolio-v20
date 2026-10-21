import styles from "../styles/main.module.scss"

function sections() {
    const sections = ["Sobre mim", "Stack", "Projetos", "Contatos"]
  return (
    <div id={styles.sectionsContainer}>
        <div id={styles.starColumn}>
            <img src="/public/icons/general/star.png" alt="star icon"/>
            <span></span>
        </div>
        <ul id={styles.sectionsList}>
            {sections.map((vall, indx) => 
                <li key={indx}>
                    <div><span>0{indx+1}</span> {vall}</div>
                    <div className={styles.optionLine}></div>
                </li>
            )}
        </ul>
    </div>
  )
}

export default sections