import styles from "../styles/main.module.scss"
import Title from "./title"
import Social from "./social"
import Sections from "./sections"

function foregroundElements() {
  return (
    <div id={styles.frontContentContainer}>
        <div>
        <Title />
        <Sections />
    </div>
    <Social />
    </div>
  )
}

export default foregroundElements