import './Header.css';
import logo from './img/logo.png';
import search from './img/search.png';

function Header() {
    return (
    <header className="header">
        <img className='header__logo' src={logo} alt='' />
        <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Become a member</li>
            <li>About Us</li>
        </ul>
        <div className='header__input'>
            <input type='text' placeholder='Search here...'/>
            <button>
                <img src={search} alt='' />
            </button>
        </div>
        <div className='header__account'>
            <p>Login / Sign Up</p>
        </div>
    </header>
    )
}

export default Header;