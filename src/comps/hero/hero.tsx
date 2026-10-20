import React, { useEffect } from 'react'
import {Cntx, type ContextItems} from "@cntx"
import {useContext} from "react"
import styles from "./styles/main.module.scss"

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
        <div id={styles.backContentContainer}>

        </div>
        <div id={styles.frontContentContainer}>
          <div id={styles.titleWrapper}>
            <p id={styles.nameContainer}>Gabriel Felipe Ferreira de Oliveira</p>
            <h1 id={styles.titleContainer}>Full Stack</h1>
            <p id={styles.subTitleContainer}>codigo - arte - propostio</p>
          </div>
          <div id={styles.titleSeparator}>
            <span></span>
            <img src="/icons/general/star.png" alt="star icon"/>
          </div>
          <p id={styles.mainText}>
            Cada funcao lapidade como escultura. <br />
            Cada interface, uma obra.
            </p>
        </div>
      </div>
    </section>
  )
}

export default hero