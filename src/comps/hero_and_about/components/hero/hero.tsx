import { useEffect } from 'react'
// import {Cntx, type ContextItems} from "@cntx"
// import {useContext} from "react"
import gsap from "@funcs/gsap/gsap"
import {lenis} from "@funcs/lenis/lenis"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import styles from "./styles/main.module.scss"

import BackgroundElements from "./backgroundElements"
import ForegroundElements from "./foreground/foregroundElements"
import ScrollProgress from "./scrollProgress"

function hero({tmln_ref}: {tmln_ref: React.RefObject<gsap.core.Timeline | null>}) {

  // const {addItem, loaded} = useContext(Cntx)

  // useEffect(() =>{
  //   const timeout = setTimeout(() =>{
  //     loaded!()
  //   }, 6000)
  //   addItem!()

  //   return () => clearTimeout(timeout)
  // }, [])

  // const gsap_ref = useRef<null | typeof gsap>(gsap_refe)

  useEffect(() =>{
    console.log(tmln_ref)
    if(!tmln_ref.current){
      return 
    }
    const tmln = tmln_ref.current

      tmln.to(".gsap_scrollBarrHero", {
        height: "100%",
      }, "0")

      tmln.to(".gsap_frontContentContainer, .gsap_backContentContainer", {
        scale: 1.25
      }, "0")

      tmln.to(".gsap_heroBackground", {
        scale: 1.25
      }, "0")

      // ScrollTrigger.create({
      //   trigger: "#hero_about_container",
      //   start: tmln.scrollTrigger?.end,
      //   end: "bottom bottom",
      //   onEnter: () => {
      //     lenis?.stop()
      //     gsap.to(".gsap_hero", {
      //       opacity: 0,
      //       duration: 1,
      //       onComplete: () => {
      //         console.log("Acabou!")
      //         lenis?.start()
      //       }
      //     })
      //   },
      //   onEnterBack: () =>{
      //     lenis?.stop()
      //     gsap.to(".gsap_hero", {
      //       opacity: 1,
      //       duration: 1,
      //       onComplete: () => {
      //         console.log("Acabou!")
      //         lenis?.start()
      //       }
      //     })
      //   },
      //   toggleActions: "play none none reverse"
      // })

      // ===================================

      // tmln.to(".gsap_hero", {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: ".gsap_hero",
      //     markers: true,
      //     start: "top top",
      //     end: `+=${window.screen.availHeight*2}`,
      //     toggleActions: "play none none reverse",
      //   },
      // })
    // })

    // gsap_ref.current = gsap

    // return () => {
    //   gsap_cntx.clear()
    //   gsap_ref.current = null
    // }
  })

  // useEffect(() =>{
  //   console.log(gsap_refe)
  //   const gsap_cntx = gsap.context(() =>{
  //     const tmln = gsap.timeline({
  //       ease: "power1.inOut",
  //       scrollTrigger:{
  //         trigger: ".gsap_hero",
  //         end: `+=${window.screen.availHeight*2}`,
  //         pin: true,
  //         scrub: true,
  //         // markers: true,
  //         start: "top top",
  //         snap: {
  //           snapTo: [0, 0]
  //         }
  //       }
  //     })

  //     tmln.to(".gsap_scrollBarrHero", {
  //       height: "100%",
  //     }, "0")

  //     tmln.to(".gsap_frontContentContainer, .gsap_backContentContainer", {
  //       scale: 1.25
  //     }, "0")

  //     tmln.to(".gsap_heroBackground", {
  //       scale: 1.25
  //     }, "0")

  //     gsap_refe.to(".gsap_hero", {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: ".gsap_hero",
  //         markers: true,
  //         start: "top top",
  //         end: `+=${window.screen.availHeight*2}`,
  //         toggleActions: "play none none reverse"
  //       }
  //     })
  //   })

  //   gsap_ref.current = gsap

  //   return () => {
  //     gsap_cntx.clear()
  //     gsap_ref.current = null
  //   }
  // })

  return (
    <section id={styles.heroSection} className='gsap_hero'>
      <div id={styles.heroContainer}>
        <BackgroundElements />
        <ForegroundElements />
        <ScrollProgress gsap={tmln_ref.current!}/>
      </div>
    </section>
  )
}

export default hero