import React from 'react'

export default function NewFunction(props){
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </>
    )
}

//inside the keys, the code understand that it is javascript, so if you put '{1+2}, it'll not show in the screen that, it will show 3