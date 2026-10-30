import { useEffect } from "react"
import styles from "./styles/main.module.scss"

import {lenis} from "@funcs/lenis/lenis"

function canvas() {

    useEffect(() => {
        lenis?.on("scroll", () =>{

        })
    })

  return (
    <div id={styles.xas}>
        <canvas></canvas>
    </div>
  )
}

export default canvas