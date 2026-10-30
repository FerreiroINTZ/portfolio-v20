import styles from "../styles/main.module.scss"

function techCard(
    {name, icon, desc, time, selected}: 
    {name: string, icon: string, desc: string, time: string, selected: boolean}) {

    const base_icons_path = "/public/icons/stack/front-end/"

  return (
    <label htmlFor={`${name}-radio`}>
      <div className={styles.enfeitesContainer}>
        {[...Array(4).keys()].map((_, indx) =>
          <div tirangle-side={indx} className={styles.triangle} style={{rotate: `${360/4 * indx}deg`}}></div>
        )}
      </div>
        <div>
          <img src={`${base_icons_path}${icon}.png`} alt={`${name} icon`}/>
        </div>
        <p>{name}</p>
    </label>
  )
}

export default techCard