// components/Cube.js
import React from 'react';

function Cube() {
  return (
    <div className="cube-container">
      <div className="cube">
  <div className="face front"><img src="/images/logos_zusters/logo-bartosz.svg" alt="Bartosz" style={{width: '80%', height: '80%'}} /></div>
  <div className="face back"><img src="/images/logos_zusters/logo-detesters.svg" alt="DeTesters" style={{width: '80%', height: '80%'}} /></div>
  <div className="face right"><img src="/images/logos_zusters/logo-ptwee-simple.svg" alt="PTwee" style={{width: '80%', height: '80%'}} /></div>
  <div className="face left"><img src="/images/logos_zusters/logo-squerist.svg" alt="Squerist" style={{width: '80%', height: '80%'}} /></div>
  <div className="face top"><img src="/images/logos_zusters/logo-techchamps.webp" alt="TechChamps" style={{width: '80%', height: '80%'}} /></div>
  <div className="face bottom"><img src="/images/logos_zusters/logo-testcoders.svg" alt="TestCoders" style={{width: '80%', height: '80%'}} /></div>
      </div>
    </div>
  );
}

export default Cube;