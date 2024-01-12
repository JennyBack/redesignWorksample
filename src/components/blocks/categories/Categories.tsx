import styles from './Categories.module.css';

const Categories = () => {
    return (
        <div aria-label="categories">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '300px',
                    marginRight: '300px'
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        listStyle: 'none',
                        justifyContent: 'space-evenly',
                        width: '100%'
                    }}
                >
                    <li
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            alt="category-image"
                            src="/cGJRpB59cYiaVAs1673384775.webp"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'lightgray'
                            }}
                        />
                        <p>Olja & Bets</p>
                    </li>
                    <li
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            alt="category-image"
                            src="/J7Rj4OTRLr8NJ2X1673384628.jpeg"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'lightgray'
                            }}
                        />
                        <p>Väggfärg</p>
                    </li>
                    <li
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            alt="category-image"
                            src="/1ttJcRCF2kT3bzW1673384753.jpeg"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'lightgray'
                            }}
                        />
                        <p>Lack & Snickerifärg</p>
                    </li>
                    <li
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            alt="category-image"
                            src="/Tv1jiskJm0FI2L41673384525.jpeg"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'lightgray',
                                objectFit: 'cover'
                            }}
                        />
                        <p>Penslar</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;
