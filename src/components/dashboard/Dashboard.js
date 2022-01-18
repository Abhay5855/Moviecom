
import React from 'react'
import './dashboard.css'
import DashboardNavbar from './DashboardNavbar'
import AllMovies from './AllMovies'
import requests from '../../api_requests/requests'

function Dashboard() {
    return (
        <div className='dashboard__container'>


            

            {/* dashboard navbar */}
              
              <DashboardNavbar />

              <AllMovies title='Trending' fetchUrl={requests.fetchTrending}/>
              <AllMovies title='Top Rated' fetchUrl={requests.fetchTopRated}/>
              <AllMovies title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
              <AllMovies title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
              <AllMovies title='Action' fetchUrl={requests.fetchActionMovies}/>
            

              {/* <Dashboard_Movies /> */}




            
        </div>

       
    )
}

export default Dashboard
