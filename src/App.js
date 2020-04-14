/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
