import styles from "./styles/main.module.scss"

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
        
        <Footer />
    </section>
  )
}

export default contact