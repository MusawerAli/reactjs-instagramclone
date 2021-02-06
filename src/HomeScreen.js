import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import requests from './Request';
import Row from './Row';

function HomeScreen() {
    return (
       <div className="homeScreen">
           <Nav />
           <Banner />
            <Row 
                title="NETFLIX ORIGNALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row 
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />

            <Row 
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />

            <Row 
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />


            <Row 
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />

            <Row 
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />

            <Row 
                title="Documentries"
                fetchUrl={requests.fetchDocumentaries}
            />


       </div>
    )
}

export default HomeScreen
