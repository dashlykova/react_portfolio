import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Projects from "./Projects"
import About from "./About"
import Hello from "./Hello"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import CV from "./CV"
import './css/tailwind.css'

library.add(faBars, faTimes)


const App = () => {
    return (<div className="page-wrapper">
        <div className="page-content">
            <Sidebar />
            <div className="content-wrapper">
                <Switch>
                    <Route exact path='/' component={Hello}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/projects' component={Projects}></Route>
                    <Route exact path='/cv' component={CV}></Route>
                </Switch>
            </div>
            <Footer />
        </div >
    </div >

    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'))