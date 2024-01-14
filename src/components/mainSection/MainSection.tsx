import React from 'react';
import Categories from '../blocks/categories/Categories';
import Hero from '../blocks/hero/Hero';
import ProductsList from '../blocks/productsList/productsList';
import Puff from '../blocks/puff/Puff';
import Slider from '../blocks/slider/Slider';

const MainSection = () => {
    return (
        <>
            <Hero />
            {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px'
                }}
            >
                <h2>Populära kategorier</h2>
            </div> */}
            <Slider />

            <Categories />
            <Puff />
        </>
    );
};

export default MainSection;
