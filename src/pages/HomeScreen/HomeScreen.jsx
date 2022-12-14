import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import { NavBar } from '../../components/NavBar/NavBar';
import { Row } from '../../components/Row/Row';
import requests from '../../services/requests';
import './HomeScreen.css';

export const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <NavBar />
      <Banner />
      <Row
        title={'Netflix Originals'}
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row
        title={'Trending Now'}
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      /><Row
        title={'Action Movies'}
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      /><Row
        title={'Comedy Movies'}
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      /><Row
        title={'Horror Movies'}
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      /><Row
        title={'Romance Movies'}
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title={'Documentaries'}
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />

    </div>



  )
}
