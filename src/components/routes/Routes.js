



import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Dashboard_Comments from '../dashboard/Dashboard_Comments';


function MainRoutes() {
    return (
        <div>

            <Router>

                <Route exact path='/community' component={Dashboard_Comments} />
                <Route exact path='/' component={Dashboard} />
            </Router>

           
            
            
        </div>
    )
}

export default MainRoutes
