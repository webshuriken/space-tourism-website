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
  const [screenOrientation, setScreenOrientation] = useState('portrait');
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
      throw new Error('Failed to map through the app destination succesfully');
    }
  }

  // to detect the screen size and use
  useEffect(() => {
    // regardless of the current menu state, lets make sure it is closed
    function handleOrientation(e) {
      if (e.matches) {
        setScreenOrientation(() => 'portrait');
      }else{
        setScreenOrientation(() => 'landscape');
      }
    }
    // create listener
    const orientation = window.matchMedia('(orientation: portrait)');
    orientation.addEventListener('change', handleOrientation);

    // clean-up function
    return () => orientation.removeEventListener('change', handleOrientation);
  }, [])

  return (
    <section className="app-page flex flex-row justify-center pt-[88px] md:pt-[130px] lg:pt-[208px] lg:px-8" style={{backgroundImage: `url(${bgImage})`}}>
      <div className='w-full max-w-[1138px]'>
        <h5 className='font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase text-center md:text-left'>
          <span className='font-bold pr-2 opacity-40'>03</span> Space launch 101
        </h5>
        <article className='grid lg:grid-cols-[2fr,1fr] lg:grid-rows-[248px_repeat(2,200px)] pt-[32px]'>
          <img src={(screenOrientation === 'portrait' ? portrait : landscape)} className='block h-auto w-auto lg:w-full lg:h-max' alt={`image of a ${technology.name}`} />
          <TechnologyMenu technologyList={technologyList} handleClick={loadTechnology} />
          <div className='md:order-1 pt-[32px] md:pt-0 uppercase text-center lg:self-end lg:text-left lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1'>
            <h4 className='font-h4 text-h4-sm md:text-h4-md lg:text-h4-lg opacity-60'>The terminology ...</h4>
            <h3 className='font-h3 text-h3-sm md:text-h3-md lg:text-h3-lg'>{technology.name}</h3>
          </div>
          <div className='justify-self-center md:order-2 md:w-[458px] pt-[22px] pb-12 md:pt-[10px] md:pb-0 md:text-p-md lg:text-p-lg leading-p-sm md:leading-p-md lg:leading-p-lg text-center md:text-left lg:justify-self-start lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 lg:w-[454px]'>
            <p>{technology.description}</p>
          </div>
        </article>
      </div>
    </section>
  )
}