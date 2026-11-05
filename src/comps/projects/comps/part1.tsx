import styles from "../styles/main.module.scss"

function part1() {
  return (
    <div className={styles.part_1}>
        <div className={styles.imagesContainer}>
            <div className={styles.mainImage}>
                <img className={styles.moldura} src="/public/projects/content/moldura.png" alt="modura"/>
                <img className={styles.currImage} src="/public/projects/content/x.jpeg" alt="currImage"/>
            </div>
            <div className={styles.carouselContainer}>carrousel</div>
        </div>
        <div className={styles.infosContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.countProject}>01/03</p>
                <h4>ELS</h4>
                <div className={styles.titleLabelContaoner}>
                    <span></span>
                    <p>SISTEMA IMOBILIARIO</p>
                </div>
            </div>
            <p className={styles.mainDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam, illum, vel labore quasi odio earum veniam dolorem quis consequatur tempore a quaerat cum, et officia reiciendis? Reiciendis, natus. Voluptate.</p>
            <span className={styles.mainDescriptionSeparator}></span>
            <ul className={styles.stackListContainer}>
                <li>
                    <div><img src="/public/icons/stack/front-end/next.png" alt="item1"/></div>
                    <p>Linguagem</p>
                </li>
                <li>
                    <div><img src="/public/icons/stack/front-end/react.png" alt="item2"/></div>
                    <p>Linguagem</p>
                </li>
                <li>
                    <div><img src="/public/icons/stack/front-end/ts.png" alt="item3"/></div>
                    <p>Linguagem</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default part1