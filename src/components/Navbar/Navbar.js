import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/shared/logo.svg';
import hamburgerBtn from '../../assets/shared/icon-hamburger.svg';
import closeBtn from '../../assets/shared/icon-close.svg';


const AppPages = ['Home', 'Destination', 'Crew', 'Technology'];

export default function Navbar() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <nav className='navbar absolute flex top-0 left-0 items-center justify-between h-[88px] md:h-[96px] w-full px-[24px] md:px-[38px] lg:mt-[40px]'>
      <img src={logo} className='h-[40px] w-[40px] md:h-[48px] md:w-[48px]' alt="app logo that consists for a white circle" />
      <button className='navbar-menu-btn h-[40px] w-[40px] py-[9.5px] px-[8px] md:hidden md:absolute'>
        <img src={hamburgerBtn} alt="hamburger button" />
      </button>
      <ul className='navbar-nav absolute top-0 right-0 flex flex-col md:flex-row md:items-center md:justify-between h-screen lg:justify-evenly md:h-[96px] w-[68%] md:w-[450px] lg:w-[830px] mr-[-1000px] md:mr-0 pt-[118px] pl-[28px] md:pt-0 md:px-[48px] font-barlow-condensed lg:text-nav uppercase'>
        {
          AppPages.map((page, i) => {
            const path = location.pathname;
            // create active link class
            const cname = (path.includes(page.toLowerCase()) || (path === '/' && page === 'Home')) ? 'active' : '';

            return (
              <li className={cname} key={i}>
                <Link to={page.toLowerCase()}>
                  <span>0{i}</span> {page}
                </Link>
              </li>
            );
          })
        }
        
        
      </ul>
      <div className='navbar--decoration'></div>
    </nav>
  )
}
