import styles from "../styles/main.module.scss"

import Part1 from "./part_1/part1"
import Part2 from "./part_2/part2"

function projectComponent() {
  return (
    <div className={styles.projectComponent}>
        <div className={styles.projectBg}>
            <img src="/public/projects/bgs/1.png" alt=""/>
        </div>

        <div className={styles.contentContainer}>
            <Part1 />
            <Part2 />
        </div>
    </div>
  )
}

export default projectComponent