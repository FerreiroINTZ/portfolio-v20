import { useEffect, useRef } from 'react'
import {Cntx, type ContextItems} from "@cntx"
import {useContext} from "react"
import styles from "./styles/main.module.scss"
import gsap from "@funcs/gsap/gsap"

import BackgroundElements from "./backgroundElements"
import ForegroundElements from "./foreground/foregroundElements"
import ScrollProgress from "./scrollProgress"

function hero() {

  // const {addItem, loaded} = useContext(Cntx)

  // useEffect(() =>{
  //   const timeout = setTimeout(() =>{
  //     loaded!()
  //   }, 6000)
  //   addItem!()

  //   return () => clearTimeout(timeout)
  // }, [])

  const gsap_ref = useRef<null | typeof gsap>(null)

  useEffect(() =>{
    const gsap_cntx = gsap.context(() =>{
      const tmln = gsap.timeline({
        ease: "power1.inOut",
        scrollTrigger:{
          trigger: ".gsap_hero",
          end: `+=${window.screen.availHeight*2}`,
          pin: true,
          scrub: true,
          markers: true,
          start: "top top",
          snap: {
            snapTo: [0, 0]
          }
        }
      })

      tmln.to(".gsap_scrollBarrHero", {
        height: "100%",
      }, "0")

      tmln.to(".gsap_frontContentContainer, .gsap_backContentContainer", {
        scale: 1.25
      }, "0")

      tmln.to(".gsap_heroBackground", {
        scale: 1.25
      }, "0")
    })

    gsap_ref.current = gsap

    return () => {
      gsap_cntx.clear()
      gsap_ref.current = null
    }
  })

  return (
    <section id={styles.heroSection} className='gsap_hero'>
      <div id={styles.heroContainer}>
        <BackgroundElements />
        <ForegroundElements />
        <ScrollProgress gsap={gsap_ref.current!}/>
      </div>
    </section>
  )
}

export default hero