import styles from "./styles/main.module.scss"

function backgroundElements() {
  return (
    <div id={styles.backContentContainer} className="gsap_backContentContainer">
          <div id={styles.topLeftLine}>
            <img src="/icons/general/star.png" alt="star icon"/>
            <span></span>
          </div>

          <div id={styles.topRightLine}>
            <span id={styles.topRightLine_1}></span>
            <span id={styles.topRightLine_2}></span>
            <p>
              DESENVOLVEDOR <br />
              FULL STACK
              </p>
          </div>

          <div id={styles.bottomLeftLine}>
            <img src="/icons/general/star.png" alt="star icon"/>
            <span id={styles.bottomLeftLine_1}></span>
            <span id={styles.bottomLeftLine_2}></span>
          </div>

          <div id={styles.bottomRightLine}>
            <span></span>
            <img src="/icons/general/star.png" alt="star icon"/>
          </div>
        </div>
  )
}

export default backgroundElements