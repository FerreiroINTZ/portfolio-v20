import styles from "./styles/main.module.scss"

import TechCard from "./components/techCard"

import {useState, useEffect} from 'react'
import {gsap} from "gsap"

function contentComponent() {

    const [itemSelected, setItemSelected] = useState<number>(0)

    const base_icons_path = "/public/icons/stack/"
    const stackList = [
        {name: "React", icon: "", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "2+ anos"},
        {name: "TypeScript", icon: "", desc: "Bibliotca principal para a construcao de interfaces dinamicas e componentizadas. Utilizo para criar aplicacoes modernas, com foco em performance e boas praticas", time: "1+ anos"}
    ]

    useEffect(() =>{
        const cntx = gsap.context(() =>{
        })

        return () => cntx.revert()
    }, [itemSelected])

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

        <div id={styles.titleContainer}>
            <h3>01 - fornt-end</h3>
            <p id={styles.subTitle}>interfaces <br />que ganham <br /> vida</p>
            <p id={styles.sectionDesk}>Constuo interfaces modernas, acessiveis e pereformaticas, focando na experiencia do usuario e na escalabilidade do codigo.</p>
            <span id={styles.titleLine}></span>

        </div>
        
        <div id={styles.stackSection}>
            <div id={styles.stackCarrousel}>
                {stackList.map((item, indx) =>
                    <TechCard 
                        key={indx}
                        name={item.name}
                        desc={item.desc}
                        icon={item.icon}
                        time={item.time}
                        selected={itemSelected == indx}
                    />
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