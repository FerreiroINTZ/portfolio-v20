import styles from "./styles/main.module.scss";

import Canvas from "./canvas"
import FrontEndContentComponent from "./content"

function front_end_component() {
    return (
    <div id={styles.front_end_container}>
        <Canvas />
        <FrontEndContentComponent />
    </div>
  )
}

export default front_end_component;
