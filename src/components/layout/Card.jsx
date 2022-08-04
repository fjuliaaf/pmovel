import React from 'react'
import './Card.css'

export default function FuncaoCard(props){
    return(
        <div className="Card">
            <div className="Conteudo">
                {props.children}
            </div>
            <div className="Footer">
                {props.titulo}
            </div>
        </div>
    )
}

//REMEBER: ALWAYS, I said ALWAYS, start the name of the function with capital letter