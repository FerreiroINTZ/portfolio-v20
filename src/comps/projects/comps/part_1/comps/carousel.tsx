import styles from "../../../styles/main.module.scss"

function image() {
  return (
    <div className={styles.carouselContainer}>
                <ul className={styles.carouselImagesContainer}>
                    <div className={styles.carouselImagesBlur} data-left></div>
                    <div className={styles.carouselImagesBlur} data-right></div>
                    {[...Array(4).keys()].map((x, indx) =>
                        <li></li>
                    )}
                </ul>
                <div className={styles.carouselControllerContainer}>
                    <div className={styles.controllerButtonsContainer}>
                        <button>&lt;-</button>
                        <button>-&gt;</button>
                    </div>
                    <div className={styles.carouselProgressContainer}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.carouselIndexContainer}>01/03</div>
                </div>
            </div>
  )
}

export default image