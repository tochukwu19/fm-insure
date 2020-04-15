/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Story from './components/story/story';
import HowWeWork from './components/Howwework/Hww';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Story />
        <HowWeWork />
      </Layout>
    </div>
  );
}

export default App;
