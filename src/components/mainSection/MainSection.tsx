import Categories from '../blocks/categories/Categories';
import Hero from '../blocks/hero/Hero';
import Puff from '../blocks/puff/Puff';

const MainSection = () => {
    return (
        <>
            <Hero />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px'
                }}
            >
                <h2>Populära kategorier</h2>
            </div>

            <Categories />
            <Puff />
        </>
    );
};

export default MainSection;
