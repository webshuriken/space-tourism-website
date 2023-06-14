import './Destination.css';
import bgMobile from '../../assets/destination/background-destination-mobile.jpg';
import bgTablet from  '../../assets/destination/background-destination-tablet.jpg';
import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import appData from '../../data/data.json';
import { useState } from 'react';
import DestinationMenu from '../DestinationMenu/DestinationMenu';


export default function Destination() {
  // make the image responsive
  const bgImage = useBackgroundImage({bgList: [bgMobile, bgTablet, bgDesktop]});
  // on first load, we will default to the first destination in the list
  const [destination, setDestination] = useState(appData.destinations[0]);
  const webp = require(`${destination.images.png}`);
  const png = require(`${destination.images.png}`);

  function onClickChangeDestination(e) {
    console.log("E: ", e.target.value)
  }

  return (
    <section className="app-page flex flex-row justify-center pt-[88px] md:pt-[130px] lg:pt-[208px] lg:px-8" style={{backgroundImage: `url(${bgImage})`}}>
      <div className='w-full max-w-[1098px]'>
        <h5 className='font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase text-center md:text-left'>
          <span className='font-bold pr-2 opacity-40'>01</span> Pick your destination
        </h5>
        <article className='grid grid-cols-[100%] grid-rows-[170px_auto] md:grid-cols-[574px] md:grid-rows-[300px_auto] lg:grid-cols-[minmax(50%,auto)_minmax(38%,432px)] lg:grid-rows-[auto] place-items-center place-content-center gap-4 md:gap-12 lg:gap-2 pt-8 md:pt-16'>
          <picture className='block realtive h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px] xl:justify-self-start'>
            <source srcSet={webp} type='image/webp' />
            <img src={png} alt={`image of the ${destination.name}`} />
          </picture>
          <div className='grid  place-items-center lg:place-items-start grid-rows-[repeat(5,auto)] pt-[10px]'>
            <DestinationMenu list={appData.destinations} handleClick={onClickChangeDestination} />
            <h2 className='pt-[12px] md:pt-8 font-h2 text-h2-sm md:text-h2-md lg:text-h2-lg uppercase'>{destination.name}</h2>
            <div>
              <p className='md:text-p-md lg:text-p-lg leading-p-sm md:leading-p-md lg:leading-p-lg text-center lg:text-left'>{destination.description}</p>
            </div>
            <span className='h-[1px] w-full my-[32px] lg:mt-16 bg-white opacity-40'></span>
            <div className='flex flex-col md:flex-row gap-[32px] md:gap-0 pb-16 md:pb-8 w-full text-center lg:text-left'>
              <div className='w-full'>
                <p className='gapfont-sub-head-2 text-sub-head-2 tracking-sub-head-2 uppercase'>AVG. DISTANCE</p>
                <p className='font-sub-head-1 text-sub-head-1 uppercase'>{destination.distance}</p>
              </div>
              <div className='w-full'>
                <p className='pb-2 font-sub-head-2 text-sub-head-2 tracking-sub-head-2 uppercase'>EST. TRAVEL TIME</p>
                <p className='font-sub-head-1 text-sub-head-1 uppercase'>{destination.travel}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}