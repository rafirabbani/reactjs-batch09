import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import MainBody from './MainBody'
import Footer from './Footer'
import './main.css'
import Home from './Home'
import Counter from '../CounterClass'
import EmployeesParent from '../EmployeesParent'
import ToDo from '../Todo-App/ToDo'
import CounterDidUpdate from '../03-lifecycle/CounterDidUpdate'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const MainLayout = () => {
    return (
        <BrowserRouter>
            <div id='container'>
                <Header/>
                <SideBar/>
                <MainBody>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/counter' component={Counter}/>
                        <Route exact path='/props-state' component={EmployeesParent}/>
                        <Route exact path='/to-do' component={ToDo}/>
                        <Route exact path='/lifecycle' component={CounterDidUpdate}/>
                    </Switch>
                </MainBody>
                <Footer/>
            </div>
        </BrowserRouter>
        
    )
}

export default MainLayout