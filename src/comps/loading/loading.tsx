import {useEffect} from 'react'
import {lenis} from "@funcs/lenis/lenis"
import styles from "./styles/main.module.scss"
import {Cntx} from "@cntx"
import {useContext, useRef} from "react"

function loading() {
  const {isAllLoaded} = useContext<any>(Cntx)
  const timeout = useRef<null | number>(null)
    useEffect(() =>{
        lenis?.stop()
    }, [])

    function limparTempo(){
      if(timeout.current){
          clearTimeout(timeout.current)
        }
    }

    useEffect(() =>{
      if(isAllLoaded){
        timeout.current = setTimeout(() =>{
          console.log("Animacao de saida!")
        }, 3000)
      }else{
        limparTempo()
      }

      return () => limparTempo()
    }, [isAllLoaded])

  return (
    <div id={styles.loadContainer}>
      <div id={styles.sideContentContainer}>
        <p id={styles.nameLabel}>Gabriel F. F. Oliveira</p>
        <p id={styles.loadingLabel}>carregando</p>
        <p id={styles.textLabel}>uma experiencia interativa</p>
        <p id={styles.yearLabel}>2026</p>
      </div>

      <div id={styles.mainContentWrapper}>
        <div id={styles.mainContentContainer}>
          <img id={styles.loadingIcon} src="/icons/loading/icon.png" alt="icone de loading"/>
          <p id={styles.mainText}>Preparando sua experiencia</p>
          <p id={styles.subText}>Reunindo os elementos...</p>
          <div id={styles.loadingContainer}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loading