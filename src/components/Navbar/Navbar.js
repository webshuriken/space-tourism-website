import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/shared/logo.svg';
import hamburgerBtn from '../../assets/shared/icon-hamburger.svg';
import closeBtn from '../../assets/shared/icon-close.svg';


const AppPages = ['Home', 'Destination', 'Crew', 'Technology'];
const URL = '/space-tourism-website';

export default function Navbar() {
  const location = useLocation();
  // always starts closed
  const [mobileMenu, setMobileMenu] = useState('disabled');
  // defaults to home
  const [navLinks, setNavLinks] = useState([]);

  /**
   * open and close mobile menu by updating its class
   */
  function handleMobileMenu() {
    if (window.innerWidth < 768) {
      setMobileMenu(() => mobileMenu === 'active' ? 'disabled' : 'active');
    }
  }

  // used for mobile menu
  useEffect(() => {
    // regardless of the current menu state, lets make sure it is closed
    function handleResize() {
      setMobileMenu((state) => 'disabled');
    }
    // create listener
    window.addEventListener('resize', handleResize);
    // clean-up function
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // prepare links on page load and location change
  useEffect(() => {
    // do logic for navlinks here instead of doing it inside the return statement
    const links = AppPages.map(page => {
      // extract the URL segment for the page we are on
      // go 1 extra character to take out the forward slash
      let activePage = location.pathname.substring(URL.length + 1);
      // just incase lets lowercase the text
      page = page.toLowerCase();
      // replace empty string with home, when at home
      if (activePage === '') {
        activePage = 'home'
      }
      // create and return object
      return {
        activeBtnClass: activePage === page ? 'active' : '',
        page: page,
        linkTo: page === 'home' ? '' : page
      }
    });
    // update state
    setNavLinks(() => links);
  }, [location.pathname]);

  return (
    <nav className='navbar absolute flex top-0 left-0 items-center justify-between h-[88px] md:h-[96px] w-full px-[24px] md:px-[38px] lg:mt-[40px]'>
      <img src={logo} className='h-[40px] w-[40px] md:h-[48px] md:w-[48px]' alt="app logo that consists for a white circle" />
      <button className='navbar-menu-btn h-[40px] w-[40px] py-[9.5px] px-[8px] md:hidden md:absolute' onClick={handleMobileMenu}>
        <img src={mobileMenu === 'active' ? closeBtn : hamburgerBtn} alt="hamburger button" />
      </button>
      <ul className={`${mobileMenu} navbar-nav absolute top-0 right-0 flex flex-col md:flex-row md:items-center md:justify-between h-screen lg:justify-evenly md:h-[96px] w-[68%] md:w-[450px] lg:w-[830px] md:mr-0 pt-[118px] pl-[28px] md:pt-0 md:px-[48px] font-barlow-condensed lg:text-nav uppercase`}>
        {
          navLinks.map((link, i) => {
            return (
              <li className={link.activeBtnClass} key={i}>
                <Link to={`${URL}/${link.linkTo}`} onClick={handleMobileMenu}>
                  <span>0{i}</span> {link.page}
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
