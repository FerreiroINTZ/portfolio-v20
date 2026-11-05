import styles from "../../../styles/main.module.scss"

function mainImage() {
  return (
    <div className={styles.mainImage}>
      <img
        className={styles.moldura}
        src="/public/projects/content/moldura.png"
        alt="modura"
      />
      <img
        className={styles.currImage}
        src="/public/projects/content/x.jpeg"
        alt="currImage"
      />
    </div>
  );
}

export default mainImage;
