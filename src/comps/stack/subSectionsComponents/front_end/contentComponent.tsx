import styles from "./styles/main.module.scss"

import TechCard from "./components/techCard"

import {useState, useEffect} from 'react'
import {gsap} from "gsap"

function contentComponent(
    {tmln}: 
    {tmln: React.RefObject<gsap.core.Timeline | null>}
) {

    const [itemSelected, setItemSelected] = useState<number>(0)

    const base_icons_path = "/public/icons/stack/front_end/"
    const stackList = [
        {name: "React", icon: "react", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "2+ anos"},
        {name: "TypeScript", icon: "ts", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "1+ anos"},
        {name: "Next.Js", icon: "next", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "1+ anos"},
        {name: "Sass", icon: "sass", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "1+ anos"},
        {name: "Tasntack", icon: "tanstack", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "1+ anos"},
        {name: "React Hook Form", icon: "rhf", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "1+ anos"}
    ]

    useEffect(() =>{
        const cntx = gsap.context(() =>{
            if(tmln.current){
                tmln.current!.to(".title_gsap", {
                    opacity: 1
                })
                console.log("slw")
            }
        })

        console.log(styles.contentSlw_tenho_que_mudar_o_nome_depois)

        return () => cntx.revert()
    }, [itemSelected, tmln])

    useEffect(() =>{
        const cntx = gsap.context(() =>{
            tmln.current!.to(".title_gsap", {
                opacity: 1,
                duration: 1,
                delay: 0
            })
        })

        console.log(styles.contentSlw_tenho_que_mudar_o_nome_depois)
        console.log(tmln)
    return () => cntx.revert()
    }, [tmln])

  return (
    <div id={styles.contentSlw_tenho_que_mudar_o_nome_depois}>
        <div id={styles.sectionPlaceHolder}>
            <img src="/public/icons/general/star.png"/>
            <p>stack</p>
            <span></span>
        </div>

        <div id={styles.sectionCountContainer}>
            <span className={styles.sectionCountExtremes}></span>
            <div id={styles.sectionCountWrapper}>
                {[...Array(4).keys()].map((_, indx) =>
                    <div className={`${styles.sectionCountItem} ${indx > 0 && styles.excluido}`}>
                        <div className={styles.sectionCountNumber}>
                            <img src="/public/icons/general/star.png"/>
                            <p>0{indx+1}</p>
                        </div>
                        {indx < 3 && <span></span>}
                    </div>
                )}
            </div>
            <span className={styles.sectionCountExtremes}></span>
        </div>

        <div id={styles.titleContainer} className="title_gsap">
            <h3>01 - fornt-end</h3>
            <p id={styles.subTitle}>interfaces <br />que ganham <br /> vida</p>
            <p id={styles.sectionDesk}>Constuo interfaces modernas, acessiveis e pereformaticas, focando na experiencia do usuario e na escalabilidade do codigo.</p>
            <span id={styles.titleLine}></span>

        </div>
        
        <div id={styles.stackSection}>
            <div id={styles.stackCarrousel}>
                {stackList.map((item, indx) =>
                <div className={styles.techCard}>
                    <input type="radio" id={`${item.name}-radio`} name="front_end-stack"/>
                    <TechCard 
                        key={indx}
                        name={item.name}
                        desc={item.desc}
                        icon={item.icon}
                        time={item.time}
                        selected={itemSelected == indx}
                        />
                </div>
                )}
            </div>
            <div id={styles.stackDescription}>
                desc
            </div>
        </div>

    </div>
  )
}

export default contentComponent