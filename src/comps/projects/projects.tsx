import styles from "./styles/main.module.scss"

import Porj from "./comps/projectComponent"

function prrojects() {
  return (
    <section id={styles.projectsSectionContainer}>
      <Porj />
    </section>
  )
}

export default prrojects