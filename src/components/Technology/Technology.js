import './Technology.css';
import bgMobile from './assets/background-technology-mobile.jpg';
import bgTablet from  './assets/background-technology-tablet.jpg';
import bgDesktop from './assets/background-technology-desktop.jpg';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import appData from '../../data/data.json';
import { useEffect, useState } from 'react';
import TechnologyMenu from '../TechnologyMenu/TechnologyMenu';


export default function Technology() {
  // default to first item in the crew list
  const [technologyList, setTechnologyList] = useState(appData.technology);
  const [technology, setTechnology] = useState(appData.technology[0]);
  const [screenOrientation, setScreenOrientation] = useState('landscape');
  // resposive page background image
  const bgImage = useBackgroundImage({bgList: [bgMobile, bgTablet, bgDesktop]});
  const portrait = require(`${technology.images.portrait}`);
  const landscape = require(`${technology.images.landscape}`);

  // prep the crew member to display
  function loadTechnology(name) {
    try {
      // we are assuming that appData is an array
      let newTechnology = false;
       technologyList.forEach(tech => {
        if (tech.name === name) {
          newTechnology = tech;
        }
      });
      if (newTechnology !== false) {
        setTechnology(state => newTechnology);
      }
    }catch(e) {
      throw new Error('Failed to map through the app technology succesfully');
    }
  }

  // to detect the screen size and use
  useEffect(() => {
    // regardless of the current menu state, lets make sure it is closed
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setScreenOrientation(() => 'portrait');
      }else{
        setScreenOrientation(() => 'landscape');
      }
    }
    // create listener
    window.addEventListener('resize', handleResize);

    // check the window size on page load
    handleResize();

    // clean-up function
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <section className="app-page technology-page flex flex-row justify-center pt-[88px] md:pt-[130px] lg:pt-[208px] lg:px-8" style={{backgroundImage: `url(${bgImage})`}}>
      <div className='w-full max-w-[1440px]'>
        <h5 className='max-w-[1138px] px-[24px] font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase text-center md:text-left'>
          <span className='font-bold pr-2 opacity-40'>03</span> Space launch 101
        </h5>
        <article className='grid pt-[32px] lg:grid-cols-[2fr,1fr] lg:grid-rows-[58px_auto_58px] xl:grid-cols-[auto_515px] xl:grid-rows-[114px_auto_114px]'>
          <div className='relative grid content-end h-[170px] overflow-hidden md:h-[310px] lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-3 lg:content-center lg:order-2 xl:h-full'>
            <img src={(screenOrientation === 'portrait' ? portrait : landscape)} className='block h-auto w-full xl:h-full xl:w-full' alt={`image of a ${technology.name}`} />
          </div>
          <div className='grid px-[24px] lg:grid-cols-[124px,auto] lg:grid-rows-[auto,auto] lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 lg:order-1 xl:grid-cols-[188px,auto]'>
            <TechnologyMenu technologyList={technologyList} handleClick={loadTechnology} />
            <div className='pt-5 text-center lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1 lg:text-left uppercase'>
              <h4 className='font-barlow-condensed text-[.94rem] tracking-[2.36px] md:text-[1.06rem] md:tracking-[2.7px]'>The terminology ...</h4>
              <h3 className='font-h3 text-h3-sm md:text-h3-md lg:text-h3-lg'>{technology.name}</h3>
            </div>
            <div className='pt-5 leading-p-sm text-center md:justify-self-center md:w-[458px] md:text-p-md md:leading-p-md md:text-left lg:justify-self-start lg:col-start-2 lg:col-span-1 lg:row-start-2 lg:row-span-1 lg:text-p-lg lg:leading-p-lg'>
              <p>{technology.description}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}