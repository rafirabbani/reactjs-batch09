import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import MainBody from './MainBody'
import Footer from './Footer'
import './main.css'
const MainLayout = () => {
    return (
        <div id='container'>
            <Header/>
            <SideBar/>
            <MainBody/>
            <Footer/>
        </div>
    )
}

export default MainLayout