import {useEffect, useState} from 'react'
import {lenis} from "@funcs/lenis/lenis"
import styles from "./styles/main.module.scss"
import {Cntx} from "@cntx"
import {useContext, useRef} from "react"
import {gsap} from "gsap"
import SplitType from "split-type"
import {AnimatePresence} from "framer-motion"

function loading() {
  const {isAllLoaded} = useContext<any>(Cntx)
  const [exit, setExit] = useState(false)
  const timeout = useRef<null | number>(null)
    useEffect(() =>{
        lenis?.stop()
        const split = new SplitType(".loadingText")
        const {chars} = split
        // console.log(split.chars)
        const cntx = gsap.context(() =>{
          const duration = .6
          const y = -5
          for(let item in chars!){
            gsap.to(chars[item], {
              y,
              duration,
              delay: () => (1 / chars.length) * (Number(item) - 1),
              yoyo: true,
              repeat: -1
            })
          }
        })

        return () => cntx.kill()
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
          setExit(() => true)
        }, 3000)
      }else{
        limparTempo()
      }

      return () => limparTempo()
    }, [isAllLoaded])

    useEffect(() =>{
      if(exit){
        lenis?.start()
      }
      console.log("Saindo!!")
      console.log(exit)
    }, [exit])

  return (
    <AnimatePresence>
      {!exit &&
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
          <p className="loadingText" id={styles.subText}>Reunindo os elementos...</p>
          <div id={styles.loadingContainer}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    }
    </AnimatePresence>
  )
}

export default loading