import styles from "./styles/main.module.scss"

import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

import Content from "./contentComponent"

function content() {
  
  const section = useRef<null | HTMLDivElement>(null)

  useEffect(() =>{
    const cntx = gsap.context(() =>{
      ScrollTrigger.create({
        trigger: ".stack_front_end_gsap",
        pin: true,
        markers: true,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        onEnter: () => {
          console.log("Entrou!")
          section.current!.style.opacity = "1"
        },
        onLeaveBack: () => section.current!.style.opacity = "0"
      })
      console.log("Acionado!")
    })

    return () => {
      cntx.revert; 
      cntx.clear();
    }

  }, [section])
  
  return (
    <div id={styles.front_end_content_container}>
        <div 
          id={styles.front_end_content_wrapper} 
          className="stack_front_end_gsap"
          ref={section}>
          <div id={styles.fornt_end_bg}><img src="public/content/stack/front_end_frame.png" alt="bg"/></div>
          <Content />
          <div id={styles.scrollLabel}>
            <div id={styles.scrollLabel_pt1}>
              <p>SCROLL</p>
              <span></span>
              <img src="/public/icons/general/star.png" alt="estrela"/>
            </div>
            <p  id={styles.scrollLabel_pt2}>para explorar</p>
          </div>
        </div>
    </div>
  )
}

export default content