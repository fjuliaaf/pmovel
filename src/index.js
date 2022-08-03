import React from "react"
import ReactDOM from "react-dom"
import './index.css'
//import First from './components/Component1'
//import NewFunction from './components/Parameters'
import Children from './components/ChildrenComponents'

ReactDOM.render(
    <div>
        <Children>
            <ul>
                <li>Maria</li>
                <li>Mariana</li>
                <li>Maria</li>
                <li>Mariana</li>
            </ul>
        </Children>
        {/*<First></First>
        <NewFunction title="learning and getting better" subtitle="practing everyday"></NewFunction>*/}
    </div>,
    document.getElementById('root')
)