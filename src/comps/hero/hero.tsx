import React, { useEffect } from 'react'
import {Cntx, type ContextItems} from "@cntx"
import {useContext} from "react"
import styles from "./styles/main.module.scss"

import BackgroundElements from "./backgroundElements"
import ForegroundElements from "./foreground/foregroundElements"

function hero() {

  // const {addItem, loaded} = useContext(Cntx)

  // useEffect(() =>{
  //   const timeout = setTimeout(() =>{
  //     loaded!()
  //   }, 6000)
  //   addItem!()

  //   return () => clearTimeout(timeout)
  // }, [])

  return (
    <section id={styles.heroSection}>
      <div id={styles.heroContainer}>
        <BackgroundElements />
        <ForegroundElements />
        
      </div>
    </section>
  )
}

export default hero