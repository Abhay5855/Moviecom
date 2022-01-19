



import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Dashboard_Comments from '../dashboard/Dashboard_Comments';
import Signup from '../authentication/Signup'


function MainRoutes() {
    return (
        <div>

            <Router>

                <Route exact path='/community' component={Dashboard_Comments} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/signup' component={Signup} />
            </Router>

           
            
            
        </div>
    )
}

export default MainRoutes
