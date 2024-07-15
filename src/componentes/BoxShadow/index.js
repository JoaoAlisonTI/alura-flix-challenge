import styles from './BoxShadow.module.css'

function BoxShandow({ categoria }) {
    
    return (

        <div className={styles.boxShandow} style={{ color: categoria }}></div>
    )
}

export default BoxShandow