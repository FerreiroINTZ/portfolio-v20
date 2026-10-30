import styles from "./styles/main.module.scss"

import Canvas from "./canvas"

function back_end_component() {
  return (
    <div id={styles.back_end_container}>
        <Canvas />
    </div>
  )
}

export default back_end_component