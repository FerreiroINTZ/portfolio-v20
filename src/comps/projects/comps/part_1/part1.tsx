import styles from "../../styles/main.module.scss"

import MainImage from "./comps/mainImage"
import Carousel from "./comps/carousel"
import Title from "./comps/title"

function part1() {
  return (
    <div className={styles.part_1}>
        <div className={styles.imagesContainer}>
            <MainImage />
            <Carousel />
        </div>

        <div className={styles.infosContainer}>
            <Title />
            
            <p className={styles.mainDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam, illum, vel labore quasi odio earum veniam dolorem quis consequatur tempore a quaerat cum, et officia reiciendis? Reiciendis, natus. Voluptate.</p>

            <span className={styles.mainDescriptionSeparator}></span>
            <ul className={styles.stackListContainer}>
                {[...Array(3).keys()].map((x,indx) =>
                    <li>
                        <div><img src="/public/icons/stack/front-end/next.png" alt="item1"/></div>
                        <p>Linguagem</p>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default part1