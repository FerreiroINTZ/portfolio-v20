import styles from "./main.module.scss"

import FrontEnd from "./subSectionsComponents/front_end/front_end_component"

function stack() {
  return (
    <section id={styles.stackSection}>
        <FrontEnd />
    </section>
  )
}

export default stack