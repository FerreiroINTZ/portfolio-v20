import styles from "./main.module.scss"

import FrontEnd from "./subSectionsComponents/front_end/front_end_component"
import BackEnd from "./subSectionsComponents/back_end/back_end_component"
import Tools from "./subSectionsComponents/tools/back_end_component"
import EndSection from "./subSectionsComponents/endSection/endSection"

function stack() {
  return (
    <section id={styles.stackSection}>
        {/* <FrontEnd /> */}
        {/* <BackEnd /> */}
        <Tools />
        <EndSection />
    </section>
  )
}

export default stack