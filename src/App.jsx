import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// Mudamos o nome de 'Page' para 'App'
export default function App() {
  return (
    <div>
      <Navbar /> 
      <Hero />
    </div>
  );
}