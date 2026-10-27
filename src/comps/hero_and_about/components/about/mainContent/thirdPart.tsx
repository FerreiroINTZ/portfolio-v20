import styles from "../styles/main.module.scss"
import CommomContainer from "./commomContainers"
import ItemsList from "./listItems"

const ThirdPartContainer = ({title, items}: {title: string, items: string[]}) =>{
    return(
        <ul className={styles.list}>
            <li className={styles.listTitle}>{title}</li>
            {items.map((item, indx) =>
                <li className={styles.listItem} key={indx}>{item}</li>
            )}
        </ul>
    )
}

function thirdPart() {
  return (
    <div id={styles.thirdPartContainer}>
        <div id={styles.topicTreeContainer}>
            <CommomContainer number="03" title="como construo" content="Do planejamento a implementacao, gosto de cuidar de cada etapa. Uso as ferramentas certas para cada desafio, mas sempre com foco em performance, escalabilidade e uma boa experiencia de usuario."/>
            <div id={styles.topicTreeList}>
                <ThirdPartContainer title="front end" items={["react", "typescript", "sass", "nextjs"]}/>
                <div id={styles.listSeparators}></div>
                <ThirdPartContainer title="back end" items={["Nextjs", "NestJs", "mongodb", "postgres"]}/>
            </div>
        </div>

        <div id={styles.middleImage}>
            <img src="/public/icons/about/quadro_3.png" alt="image"/>
        </div>

        <div id={styles.topicFourContainer}>
            <CommomContainer number="04" title="alem do codigo" content="acredito no poder da arte, da musica e da historica para ampliar a forma como vejo o mundo. Esses sao nao apenas hobbies, mas parte de que me inspira a criar coisas melhores"/>
            <ItemsList items={["arte", "musica", "historia", "filosofia"]} />
        </div>
    </div>
  )
}

export default thirdPart