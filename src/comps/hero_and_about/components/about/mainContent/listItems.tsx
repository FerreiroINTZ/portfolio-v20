import styles from "../styles/main.module.scss"

function listItems({items}: {items: string[]}) {
  return (
    <ul id={styles.itensList}>
        {items.map((item, indx) =>
            <li key={indx}><img src="/public/icons/general/star.png" alt="star icon"/><p>{item}</p></li>
        )}
    </ul>
  )
}

export default listItems