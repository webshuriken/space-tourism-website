import './Crew.css';
import bgMobile from '../../assets/crew/background-crew-mobile.jpg';
import bgTablet from  '../../assets/crew/background-crew-tablet.jpg';
import bgDesktop from '../../assets/crew/background-crew-desktop.jpg';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import appData from '../../data/data.json';
import { useEffect, useState } from 'react';
import CrewMenu from '../CrewMenu/CrewMenu';


export default function Crew() {
  // default to first item in the crew list
  const [crew, setCrew] = useState(appData.crew);
  const [member, setMember] = useState(appData.crew[0]);
  // make the image responsive
  const bgImage = useBackgroundImage({bgList: [bgMobile, bgTablet, bgDesktop]});
  const webp = require(`${member.images.webp}`);
  const png = require(`${member.images.png}`);

  // prep the crew member to display
  function loadCrewMember(name) {
    try {
      // we are assuming that appData is an array
      let newCrewMember = false;
       crew.forEach(memb => {
        if (memb.name === name) {
          newCrewMember = memb;
        }
      });
      if (newCrewMember !== false) {
        setMember(state => newCrewMember);
      }
    }catch(e) {
      throw new Error('Failed to map through the app destination succesfully');
    }
  }

  return (
    <section className="app-page flex flex-row justify-center pt-[88px] md:pt-[130px] lg:pt-[208px] lg:px-8" style={{backgroundImage: `url(${bgImage})`}}>
      <div className='w-full max-w-[1098px]'>
        <h5 className='font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase text-center md:text-left'>
          <span className='font-bold pr-2 opacity-40'>02</span> Meet your crew
        </h5>
        <article className='grid pt-[32px]'>
          <picture className='block flex justify-center h-[222px] w-auto border-b border-white border-solid'>
            <source srcSet={webp} type='image/webp' />
            <img src={png} className='block h-full w-auto' alt={`image of crew member ${member.name}`} />
          </picture>
          <CrewMenu crewList={crew} handleClick={loadCrewMember} />
          <div className='pt-[32px] uppercase text-center'>
            <h4 className='font-h4 text-h4-sm md:text-h4-md lg:text-lg'>{member.role}</h4>
            <h3 className='font-h3 text-h3-sm md:text-h3-md lg:text-h3-lg'>{member.name}</h3>
          </div>
          <div className='pt-[22px] pb-12 text-center'>
            <p>{member.bio}</p>
          </div>
        </article>
      </div>
    </section>
  )
}