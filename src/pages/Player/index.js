import styles from './Player.module.css'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';
import { api } from 'api';

function Player() {

    const [video, setvideo] = useState()
    const parametros = useParams()
    useEffect(() => {
        fetch(`${api}?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setvideo(...dados)
            })
    }, [parametros.id])

    // const patametros = useParams()
    // const video = videos.find((video) => {
    //     return video.id === Number(patametros.id)
    // })

    if (!video) {
        return (<NaoEncontrada />)
    }
    return (
        <section className={styles.conteudo}>
            <h1 className={styles.titulo}>{video.titulo}</h1>
            <p className={styles.descricao}>{video.descricao}</p>
            <div className={styles.containerVideo}>
                <iframe className={styles.video}
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen="" ></iframe>
            </div>
        </section>
    )
}

export default Player