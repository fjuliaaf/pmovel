import React from 'react'
import './App.css'

import First from './Component1'
import NewFunction from './Parameters'
import Children from './ChildrenComponents'
import FuncaoCard from './layout/Card'

export default function Fapp(){
    return(
        <div className="App">
            <div>
                <FuncaoCard titulo="exercicio X">
                    conteudo
                </FuncaoCard>
                <First></First>
                <Children>
                    <ul>
                        <li>Maria</li>
                        <li>Mariana</li>
                        <li>Maria</li>
                        <li>Mariana</li>
                    </ul>
                </Children>
                <NewFunction title="learning and getting better" subtitle="practing everyday"></NewFunction>
            </div>
        </div>
    )
}