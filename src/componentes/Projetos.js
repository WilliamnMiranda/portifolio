import React from 'react'
import style from './../css/projetos.module.css'
import pedidoPequeno from './../data/imagems/pedidosPequeno.png'
import lojaPequena from './../data/imagems/lojaPequena.png'
import AnimesPequeno from './../data/imagems/animesPequeno.png'
import Projeto from './../componentes/Projeto.js'
const Projetos = () => {
    let [imagems , setImagem] = React.useState([
        {
            url:pedidoPequeno,
            link:"https://williamnmiranda.github.io/project_orders/",
        },
        {
            url:lojaPequena,
            link:"https://williamnmiranda.github.io/project-react-store/",
        },
        {
            url:AnimesPequeno,
            link:"",
        },

    ])
    return (
       <section>
            <h1 className = {style.tittleProjetos}>Projetos</h1>
            <div className = {style.containerProjetos}>
            
            {
                
                imagems.map((item) => {
                    return  <Projeto {...item}/>
                })
            }
        </div>
       </section>
    )
}

export default Projetos
