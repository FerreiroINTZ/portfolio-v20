import styles from "../styles/main.module.scss"
import CommomContainer from "./commomContainers"
import ListItems from "./listItems"

function howIThink() {
  return (
    <div id={styles.howIThinkContainer}>
      <div id={styles.howIThinkContainerImg}><img src="/public/icons/about/quadro_2.png" alt="second imagem"/></div>
      <div>
        <CommomContainer number="02" title="como penso" content="gosto de entender o problema como um todo. Acredito que boas solucoes nascem de combinacao entre logica, estetica e proposito. Penso em sistemas, pessoas e no impacto que o que construo pode gerar."/>
        
        <div id={styles.otherInfos}>
          <div id={styles.divider}></div>
          <ListItems items={["arquitetura", "experiencia", "identidade visual"]} />
        </div>
      </div>
    </div>
  )
}

export default howIThink