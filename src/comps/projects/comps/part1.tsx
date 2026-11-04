import styles from "../styles/main.module.scss"

function part1() {
  return (
    <div className={styles.part_1}>
        <div className={styles.imagesContainer}>
            <div className={styles.mainImage}>
                <img className={styles.modlura} src="/public/projects/content/moldura.png" alt="modura"/>
                <img className={styles.currImage} src="#" alt="currImage"/>
            </div>
            <div className={styles.carouselContainer}>carrousel</div>
        </div>
        <div className={styles.infosContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.countProject}>01/03</p>
                <h4>Nome do Projeto</h4>
                <div className={styles.titleLabelContaoner}>
                    <span></span>
                    <p>SISTEMA IMOBILIARIO</p>
                </div>
            </div>
            <p className={styles.mainDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam, illum, vel labore quasi odio earum veniam dolorem quis consequatur tempore a quaerat cum, et officia reiciendis? Reiciendis, natus. Voluptate.</p>
        </div>
    </div>
  )
}

export default part1