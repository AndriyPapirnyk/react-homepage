import './Home.css';
import mainImg from './img/main.png';
import play from './img/play.png';

function Home() {
    return (
        <div className='home'>
            <div className='home__text'>
                <h1>Find out talented <br></br> <span>freelancer</span> with <br></br> better review faster.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br> quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <div>
                    <button>Discover Now</button>
                    <button>
                        <img src={play} alt='' />
                        <p>Watch Demo</p>
                    </button>
                </div>
            </div>
            <img className='home__main' src={mainImg} alt='' />
        </div>
    )
}

export default Home;