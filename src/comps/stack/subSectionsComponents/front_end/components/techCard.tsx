import styles from "../styles/main.module.scss"

function techCard(
    {name, icon, desc, time, selected}: 
    {name: string, icon: string, desc: string, time: string, selected: boolean}) {

    const base_icons_path = "/public/icons/stack/front_end/"

  return (
    <div className={styles.techCard}>
        {name}
    </div>
  )
}

export default techCard