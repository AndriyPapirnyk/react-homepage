import './Footer.css';
import p1 from './img/Group-1.png'
import p2 from './img/Group-2.png'
import p3 from './img/Group-3.png'
import p4 from './img/Group-4.png'
import p5 from './img/Group-5.png'
import p6 from './img/Group.png'



function Footer() {
    return (
        <footer className='footer'>
            <img src={p5} alt='' />
            <img src={p4} alt='' />
            <img src={p3} alt='' />
            <img src={p2} alt='' />
            <img src={p1} alt='' />
            <img src={p6} alt='' />
        </footer>
    )
}

export default Footer;