import styles from "../styles/main.module.scss"
import CommomContainer from "./commomContainers"


function howIThink() {
  return (
    <div id={styles.howIThinkContainer}>
      <div id={styles.howIThinkContainerImg}><img src="/public/icons/about/quadro_2.png" alt="second imagem"/></div>
      <div>
        <CommomContainer number="02" title="como penso" content="gosto de entender o problema como um todo. Acredito que boas solucoes nascem de combinacao entre logica, estetica e proposito. Penso em sistemas, pessoas e no impacto que o que construo pode gerar."/>
        
        <div id={styles.otherInfos}>
          <div id={styles.divider}></div>
          <ul id={styles.itensList}>
            {["arquitetura", "experiencia", "identidade visual"].map((item, indx) =>
              <li key={indx}><img src="/public/icons/general/star.png" alt="star icon"/><p>{item}</p></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default howIThink