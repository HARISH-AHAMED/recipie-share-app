import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import './Home.css';
import img2 from './images/slide-img/slide-img2.png';
import img3 from './images/slide-img/slide-img3.jpg';
import img4 from './images/slide-img/slide-img4.jpg';
import img5 from './images/slide-img/slide-img5.jpg';
import img6 from './images/slide-img/slide-img6.jpg';



function Home() {
    const images = [img2, img3, img4, img5, img6];
     const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            setAnimationKey((prevKey) => prevKey + 1); // Force re-render with new key
        }, 3000); // every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <div className="main-section">
                <div className="search-bar">
                    {/* <p className="search-slogan">Discover Delicious Dishes</p> */}
                    <h2>Home-Cooked Happiness</h2>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Discover Delicious Dishes"
                    />
                </div>

                 <div className="image-side">
        <img
          key={animationKey}
          src={images[index]}
          alt="Recipe Slide"
          className="slide-img"
        />
      </div>
            </div>
        </>
    );
}

export default Home;
