import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploteTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/Carousel';
import { Heros } from './layouts/Homepage/Heros';
import { LibraryServices } from './layouts/Homepage/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';


function App() {
  return (
    <div>
    <Navbar />
    <ExploteTopBooks />
    <Carousel />
    <Heros />
    <LibraryServices />
    <Footer />
    </div>
  );
}

export default App;
