import './Main.css'
import Home from './home/Home';
import Header from './header/Header';
import Footer from './footer/Footer';

function Main() {
    return (
        <main className='main'>
            <div className='main__container'>
                <Header />
                <Home />
                <Footer />
            </div>
        </main>
    )
}

export default Main;