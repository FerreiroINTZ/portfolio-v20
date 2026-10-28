import styles from "./styles/main.module.scss"

function contentComponent() {
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
    </div>
  )
}

export default contentComponent