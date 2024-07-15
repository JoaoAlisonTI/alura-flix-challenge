import Formulario from 'componentes/Formulario'
import styles from './NovoVideo.module.css'
import { useEffect, useState } from 'react'
import categorias from '../../json/categorias.json'
import { api } from 'api'

function NovoVideo() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(api)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    const adicionarNovoVideo = (novoVideo) => {
        setVideos((prevVideos) => [...prevVideos, novoVideo])
    }

    return (
        <Formulario
            className={styles.sessaoFormulario}
            aoCadastrar={adicionarNovoVideo}
            categorias={categorias.map((categoria) => categoria.nome)}
        />
    )
}

export default NovoVideo