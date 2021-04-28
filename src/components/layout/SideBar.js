import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <aside>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/lifecycle">Lifecycle</Link></li>
                <li><Link to="/props-state">Props and State</Link></li>
                <li><Link to="/to-do">To Do App</Link></li>
            </ul>
        </aside>
    )
}

export default SideBar
