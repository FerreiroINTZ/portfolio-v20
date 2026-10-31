import styles from "./styles/main.module.scss"

import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

import Content from "./contentComponent"

function content() {
  
  const section = useRef<null | HTMLDivElement>(null)
  const sectioWrapper = useRef<null | HTMLDivElement>(null)

  const bgContainer = useRef<null | HTMLDivElement>(null)
  
  // colocar o gsap.timelime diretamente aqui, depois
  const tmln = useRef<null | gsap.core.Timeline>(gsap.timeline({
        // opacity: 1,
        scrollTrigger: {
          trigger: sectioWrapper.current,
          start: `+=${window.innerHeight * 5}`,
          end: `+=${section.current?.offsetHeight}`,
          // markers: true,
          toggleActions: "play none none reverse"
        }
      }))

  useEffect(() =>{
    const cntx = gsap.context(() =>{
      // tmln.current = gsap.timeline({
      //   // opacity: 1,
      //   scrollTrigger: {
      //     trigger: ".slw_gsap",
      //     start: `+=${window.innerHeight * 2}`,
      //     end: "bottom top",
      //     markers: true,
      //     toggleActions: "play none none reverse"
      //   }
      // })

      const start = window.innerHeight * 2
      ScrollTrigger.create({
        trigger: sectioWrapper.current,
        start: `+=${start}`,
        end: `+=${sectioWrapper.current!.offsetHeight - (window.innerHeight + start)}`,
        markers: true,
        onEnter: () => bgContainer.current!.style.opacity = "1",
        onEnterBack: () => bgContainer.current!.style.opacity = "1",
        onLeaveBack: () => bgContainer.current!.style.opacity = "0",
        onLeave: () => bgContainer.current!.style.opacity = "0",
      })
      console.log("Acionado!")
      console.log(sectioWrapper.current?.offsetHeight)
    })

    return () => {
      cntx.revert; 
      cntx.clear();
      tmln.current = null
    }
  })
  
  return (
    <div id={styles.front_end_content_container} ref={sectioWrapper}>
        <div 
          id={styles.front_end_content_wrapper}
          className="stack_front_end_gsap"
          ref={section}>
          <div 
            ref={bgContainer} 
            id={styles.fornt_end_bg}>
              <img src="public/content/stack/tools_frame.png" alt="bg"/>
          </div>          
          
          <Content tmln={tmln}/>
          
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