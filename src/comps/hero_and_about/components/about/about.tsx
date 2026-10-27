import styles from "./styles/main.module.scss"

import {useEffect} from "react"

import MainContent from "./mainContent/mainContent"
import HowIThink from "./mainContent/howIThink"
import ThirdPart from "./mainContent/thirdPart"

function about({gsap_ref}: {gsap_ref: React.RefObject<null | gsap.core.Timeline>}) {
  
  useEffect(() =>{
    const tmln = gsap_ref.current
    if(tmln && Object.keys(tmln).length){ // talvez mudar o ultimo teste
      // animacoes aqui
    }
  })
  
  return (
    <section id={styles.aboutContainer} className="about_section_gsap">
      <div id={styles.aboutBackground}>
        <img src="/public/icons/about/bg.jpeg" alt="background da secao sobre"/>
      </div>
      <div id={styles.sectionContent}>
        <div id={styles.sectionLabel}><img src="/public/icons/general/star.png" alt="star icon"/><p>sobre mim</p></div>
        <MainContent />
        <HowIThink />
        <ThirdPart />
      </div>
    </section>
  )
}

export default about