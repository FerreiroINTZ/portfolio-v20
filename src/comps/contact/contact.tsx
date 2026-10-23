import styles from "./styles/main.module.scss"

import Content from "./containers/content"
import Forms from "./containers/forms"
import Footer from "./containers/footer"

function contact() {
  return (
    <section id={styles.contactContainer}>
        <div id={styles.bgContent}>
            <img
                id={styles.bg_sideElement} 
                src="/public/icons/contact/bg_sideElement.png" 
                alt="elemento de fundp"
                />
            <img 
                id={styles.bg_element}
                src="/public/icons/contact/bg_element.png" 
                alt="background element" />
        </div>

        <div id={styles.middleContent}>
          <div id={styles.sectionLabel}>
            <img src="/public/icons/general/star.png" alt="star icon" />
            <p>contato</p>
            <div></div>
          </div>
          <Content />
          <Forms />
        </div>
        
        <Footer />
    </section>
  )
}

export default contact