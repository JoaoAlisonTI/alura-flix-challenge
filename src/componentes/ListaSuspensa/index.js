import styles from './ListaSuspensa.module.css'

    function ListaSuspensa ({label, aoAlterado, valor, obrigatorio = false, itens, placeholder }) {
    return (
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select className={styles.campoInput}
                placeholder={placeholder} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor} >
                    <option className={styles.opcoes} value="">Selecione uma categoría...</option> 
                {itens.map(iten => {
                    return <option className={styles.opcoes} key={iten}>{iten}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa