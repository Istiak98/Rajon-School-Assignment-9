import React from 'react';
import AllClasses from '../AllClasses/AllClasses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Class from '../Class/Class';
import Gallary from '../Gallary/Gallary';


const Home = () => {
    return (
        <div>
            <Header></Header> 
            <AllClasses></AllClasses>
            <Gallary></Gallary>
            
           
        </div>
        
    );
};

export default Home;