import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploteTopBooks } from './layouts/Homepage/components/ExploreTopBooks';
import { Carousel } from './layouts/Homepage/components/Carousel';
import { Heros } from './layouts/Homepage/components/Heros';
import { LibraryServices } from './layouts/Homepage/components/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Homepage } from './layouts/Homepage/Homepage';


export const App = () => {
  return (
    <div>
    <Navbar />
    <Homepage />
    <Footer />
    </div>
  );
}

export default App;
