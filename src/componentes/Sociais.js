import React from 'react'
import Linkedin from './../data/imagems/lnk.svg';
import Gh from './../data/imagems/github (2).svg';
import Wpp from './../data/imagems/whats.svg';
import style from './../css/Sociais.module.css'
const Sociais = () => {
    return (
        <section className = {style.containerSociais}>
            <h1>Contatos</h1>
            
            <div className = {style.sociais}>

                <div  className = {style.itemSocial}>
                    <a  href="https://www.linkedin.com/in/william-nascimento-79464a182/">
                        <img src = {Linkedin}/>
                    </a>
                </div>

                <div  className = {style.itemSocial}>
                    <a href="https://github.com/WilliamnMiranda">
                        <img className ={style.gh} src = {Gh}/>
                    </a>
                </div>

                <div  className = {style.itemSocial}>
                    <a href="https://api.whatsapp.com/send?phone=55219972059102&text=Ola%20%2C%20entrei%20em%20contato%20pelo%20link%20do%20seu%20portf%C3%B3lio.">
                        <img src = {Wpp}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Sociais
