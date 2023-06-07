import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/shared/logo.svg';
import hamburgerBtn from '../../assets/shared/icon-hamburger.svg';
import closeBtn from '../../assets/shared/icon-close.svg';


export default function Navbar() {
  return (
    <nav className='navbar absolute flex top-0 left-0 items-center justify-between h-[88px] w-full px-[24px] md:p-[38px]'>
      <img src={logo} className='h-[40px] w-[40px]' alt="app logo that consists for a white circle" />
      <button className='navbar-menu-btn h-[40px] w-[40px] py-[9.5px] px-[8px] md:hidden md:absolute'>
        <img src={hamburgerBtn} alt="hamburger button" />
      </button>
      <ul className='navbar-nav absolute top-0 right-0 flex flex-col md:flex-row md:items-center md:justify-between h-screen md:h-[96px] w-[68%] md:w-[450px] mr-[-1000px] md:mr-0 md pt-[118px] pl-[28px] md:pt-0 md:px-[48px] font-barlow-condensed uppercase'>
        <li className='active'>
          <Link to="/"><span>00</span> Home</Link>
        </li>
        <li>
          <Link to="destination"><span>01</span> Destination</Link>
        </li>
        <li>
          <Link to="crew"><span>02</span> Crew</Link>
        </li>
        <li>
          <Link to="tehcnology"><span>03</span> Technology</Link>
        </li>
      </ul>
    </nav>
  )
}
