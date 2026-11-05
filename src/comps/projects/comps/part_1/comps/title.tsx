import styles from "../../../styles/main.module.scss"

function title() {
  return (
    <div className={styles.titleContainer}>
                <p className={styles.countProject}>01/03</p>
                <h4>ELS</h4>
                <div className={styles.titleLabelContaoner}>
                    <span></span>
                    <p>SISTEMA IMOBILIARIO</p>
                </div>
            </div>
  )
}

export default title