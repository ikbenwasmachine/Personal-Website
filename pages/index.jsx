import React from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

function HomePage() {

  return (
    <div style={{backgroundColor: 'black', color: 'white'}}>
      <header>
  <img src="/images/Header.webp" alt="Banner" style={{ width: '100%', maxHeight: '40vh', height: 'auto', objectFit: 'contain', display: 'block', marginBottom: '20px' }} />
      </header>
      <p>Dit is de homepage.</p>

      <div>
        <h2>Over Sofius</h2>
        <p>
          Sofius is een toonaangevend testbedrijf dat zich toelegt op het leveren van uitgebreide en betrouwbare testoplossingen.
          Met een team van ervaren professionals en geavanceerde technologie zorgt Sofius voor de kwaliteit en
          prestaties van softwaretoepassingen in verschillende industrieën.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
