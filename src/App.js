import React from 'react';
import Banner from './components/Banner'
import Row from './components/Row';
import Nav from './components/Nav';

import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">

      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Tendances actuelles" fetchUrl ={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl ={requests.fetchTopRated} />
      <Row title="Action et aventure" fetchUrl ={requests.fetchActionMovies} />
      <Row title="Comédies" fetchUrl ={requests.fetchComedyMovies} />
      <Row title="Horreur" fetchUrl ={requests.fetchHorrorMovies} />
      <Row title="Romantiques" fetchUrl ={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl ={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;


