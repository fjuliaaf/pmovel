import React from 'react'



function First(){
    return (
        <div>
            <h1>Hiiiiii</h1>
            <h2>Atividades</h2>
        </div>
        //ps: if you do not want do use 'div' to put more than 1 element, you can use intead of it 'React.Fragment' as a tag
    )
}

export default First

// you can build that function in other way. Example:
/*export default function(){
    return 'something'
}   ---- That function here is anonymous

you can also use instead of 'function' the kind of expression '=>'
export default () => { */