import React from 'react';
import './App.css';
import HeaderSection from './components/headerSection/HeaderSection';
import FooterSection from './components/footerSection/FooterSection';
import MainSection from './components/mainSection/MainSection';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';

const App = () => {
    return (
        <div className="page-wrapper">
            <HeaderSection />
            <MainSection />
            <ScrollToTopButton />
            <FooterSection />
        </div>
    );
};

export default App;
