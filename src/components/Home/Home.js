import './Home.css';
import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import bgDesktop from '../../assets/home/background-home-desktop.jpg';
import useBackgroundImage from '../../hooks/useBackgroundImage';


function Home() {
  // select the image to use as background
  const bgImage = useBackgroundImage({bgList: [bgMobile, bgTablet, bgDesktop]});

  return (
    <section id="home-wrapper" className='app-page flex justify-center pt-[112px] md:pt-[203px] px-[24px] lg:px-[8%] xl:px-[11%] pb-16 lg:pt-[28%]' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-[260px_150px] w-full lg:max-w-[1600px] text-center'>
        <div className='lg:col-start-1 lg:col-span-1 py-1 h-[160px] md:h-[220px] lg:text-left'>
          <h5 className='font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase'>So, you want to travel to</h5>
          <h1 className='font-h1 pt-[12px] md:pt-[16px] lg:pt-[26px] text-h1-sm md:text-h1-lg leading-[100px] md:leading-[150px] uppercase'>Space</h1>
        </div>
        <div className='lg:col-start-1 lg:col-span-1 max-w-[450px] md:text-p-md lg:text-p-lg leading-p-sm md:leading-[28px] lg:text-left'>
          <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button className='explore-btn lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:justify-self-end mt-[70px] md:mt-[140px] lg:mt-0 bg-white text-midnight uppercase'>
          <span>Explore</span>
        </button>
      </div>
    </section>
  );
}

export default Home;
