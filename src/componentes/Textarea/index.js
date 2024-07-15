import styles from './TextareaFormulario.module.css'

//
function Textarea(
    { tipo, minlength, maxlength, placeholder, label, valor, obrigatorio = false, aoAlterado }
) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.textarea} >
            <label>{label}</label>
            <textarea className={styles.campoInput}
                type={tipo}
                minLength={minlength}
                maxLength={maxlength}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default Textarea