import React from 'react'
import style from './../css/Skills.module.css'
import Skill from './Skill.js'
const Skills = () => {
    let skills = [
        {
            nome:"html",
            skill:95,
        },
        {
            nome:"css",
            skill:85,
        },
        {
            nome:"JavaScript",
            skill:70,
        },
        {
            nome:"BootStrap",
            skill:80,
        },
        {
            nome:"jQuery",
            skill:60,
        },
        {
            nome:"PHP",
            skill:50,
        },
        {
            nome:"React",
            skill:65,
        },

    ];
    return (
        <section>
            <div className = {style.containerSkill}>
               <div className ={style.Skills}>
                            <h1 className = {style.tittleSkill}>Skills</h1>
                    {
                        skills.map((item) =>{
                           return <Skill {...item} key = {item.nome}/>
                        })
                    }
               </div>
            </div>
        </section>
    )
}

export default Skills
