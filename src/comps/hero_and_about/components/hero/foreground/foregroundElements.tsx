import styles from "../styles/main.module.scss"
import Title from "./title"
import Social from "./social"
import Sections from "./sections"

function foregroundElements() {
  return (
    <div id={styles.frontContentContainer} className="gsap_frontContentContainer">
      <div id={styles.heroBackground} className="gsap_heroBackground">
        <img src="/public/icons/hero/bg.jpeg" alt="hero background" />
      </div>
      <div>
          <Title />
          <Sections />
      </div>
      <Social />
    </div>
  )
}

export default foregroundElements