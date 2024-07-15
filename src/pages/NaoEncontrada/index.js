import styles from './NaoEncontrada.module.css'
import { FaExclamationTriangle } from "react-icons/fa";

function NaoEncontrada () {
    return (
        <section className={styles.container}>
            <FaExclamationTriangle className={styles.icone}/>
            <h2>Ops! <br/> O conteúdo que você procura não foi encontrado!</h2>
        </section>
    )
}

export default NaoEncontrada