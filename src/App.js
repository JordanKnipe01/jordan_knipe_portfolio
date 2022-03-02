import React from 'react';
import './app.css';
import {Footer, Blog, Possibility, Features, ProfessionalPortfolio , Header} from './containers';
import {CTA, Brand, Navbar} from './components';


 


const App = () => {
  return (
      <div className = "App">
        <div className='gradient__bg'>
          <Navbar />
          <Header />
          

        </div>
        
        <Brand />
        <ProfessionalPortfolio />
        <Features />
        <Possibility />
        <CTA />

        <Footer />
      </div>
  )
};


export default App;
 