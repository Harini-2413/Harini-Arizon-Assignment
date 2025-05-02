import React from 'react';
import '../styles//HomePage.css';
import FeaturedProducts from './FeaturedProducts';

function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to Arizon</h1>
        <p>Your one-stop shop for everything you love.</p>
      </section>

      <FeaturedProducts />
    </main>
  );
}

export default HomePage;