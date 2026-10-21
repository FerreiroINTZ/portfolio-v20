import styles from "../styles/modules/_commomContainer.module.scss"

function commomContainers(
    {number, title, content}: {number: string, title: string, content: string}
) {
  return (
    <div className={styles.commomContainer}>
        <div className={styles.commomContainerTitle}>
            <p>{number}</p>
            <h3>{title}</h3>
        </div>
        <p className={styles.commomContainerContent}>{content}</p>
    </div>
  )
}

export default commomContainers