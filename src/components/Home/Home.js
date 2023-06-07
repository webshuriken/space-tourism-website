import '../../index.css';
import './Home.css';
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import bgDesktop from '../../assets/home/background-home-desktop.jpg';
import useBackgroundImage from '../../hooks/useBackgroundImage';


function Home() {
  // select the image to use as background
  const bgImage = useBackgroundImage({bgList: [bgMobile, bgTablet, bgDesktop]});
// TODO: WORKING ON THE APP PADDING
  return (
    <section id="home-wrapper" className='app-page pt-app-112 px-app-24 text-center' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='py-1'>
        <h5 className='font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase'>So, you want to travel to</h5>
        <h1 className='font-h1 text-h1-sm md:text-h1-lg uppercase'>Space</h1>
      </div>
      <div className='md:text-p-md lg:text-p-lg leading-p-sm'>
        <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <button className='explore-btn mt-[80px] bg-white text-midnight uppercase'>Explore</button>
    </section>
  );
}

export default Home;
