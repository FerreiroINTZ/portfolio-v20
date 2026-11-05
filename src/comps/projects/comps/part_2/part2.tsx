import styles from "../../styles/main.module.scss";

function part2() {
  return (
    <div className={styles.part_2}>
      <div className={styles.infoSideContainer}>
        <h4>descricao</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          accusamus illum! Illo, facere quos nesciunt temporibus distinctio
          fugit excepturi labore, error asperiores similique quibusdam fugiat
          tenetur! Laboriosam aliquid voluptas fuga!
        </p>
        <span className={styles.descSeparator}></span>
        <div className={styles.projectActionsContainer}>
          <button>Git Hub</button>
          <button>Deploy</button>
        </div>
        <div className={styles.infosContainer}>
            <div className={styles.infoWrapper}>
              <p className={styles.label}>commits</p>
              <p className={styles.value}>600</p>
            </div>
            <div className={styles.infoWrapper}>
              <p className={styles.label}>linhas</p>
              <p className={styles.value}>1,4 mil</p>
            </div>
        </div>
      </div>
      <div className={styles.imageSideContainer}>
        <div className={styles.molduraContainer}>
          <img className={styles.descImage} src="/public/projects/content/x.jpeg" alt="quadro"/>
          <img className={styles.moldurax} src="/public/projects/content/moldura_horizontal.png" alt="moldura"/>
        </div>
      </div>
    </div>
  );
}

export default part2;
