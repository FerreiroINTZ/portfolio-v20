import styles from "./styles/main.module.scss"
import {useEffect} from "react"
import {type Gsap} from "@funcs/gsap/gsap"
import {gsap} from "gsap"

function scrollProgress({gsap}: {gsap: gsap.core.Timeline}) {
  
    useEffect(() =>{
        let gsap_cntx: gsap.Context;
        if(gsap){
            gsap_cntx = gsap.context(() =>{
                
            })
        }

        return () => gsap_cntx && gsap_cntx.clear()
    }, [gsap])
  
    return (
    <div id={styles.scrollProgress}>
        <p>role para descobrir</p>
        <div id={styles.scrollBarrContainer}>
            <img src="/public/icons/general/star.png" alt="star icon" />
            <div></div>
            <div id={styles.progressContainer} className="gsap_scrollBarrHero"></div>
        </div>
    </div>
  )
}

export default scrollProgress