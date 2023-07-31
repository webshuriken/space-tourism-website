import {useEffect, useState} from 'react';
import { Circles } from 'react-loader-spinner';
import { useSpinner } from '../../hooks/userSpinner';


// set my constants
const NASA_API_URL = 'https://images-api.nasa.gov/search?q=';
const SEARCH_LIST = ['moon', 'planet mars', 'europa', 'titan'];

export default function Explore() {
  const [images, setImages] = useState({});
  // use spinner costum hook
  const spinnerLoading = useSpinner();

  // retrieve images on load, from the Moon, Mars, Europa or Titan
  useEffect(() => {
    async function getImages() {
      // use to select random item from search list
      var randNum = Math.floor(Math.random() * 4);
      // lets control the fetch
      try {
        const res = await fetch(`${NASA_API_URL}${SEARCH_LIST[randNum]}&page_size=16`);
        // lets check the response code and handle it
        if (res.status !== 200) {
          throw "There are an issue in the fetch";
        }
        var data = await res.json();
      }catch(err) {
        console.error(`NASA data fetch: ${err.message}`);
      }
      // loop through the returned data and get all the image href
      let images = [];
      data.collection.items.forEach(item => {
        if (item.links) {
          item.links.forEach(link => {
            if (link.render === 'image') {
              // now we have the url so lets append it to images
              images.push(link.href);
            }
          })
        }
      });
      // update state with fetched iamges
      setImages(() => {
        return {
          name: SEARCH_LIST[randNum],
          links: images
        }
      });
    }
    // time to get images
    getImages();
  }, []);

  return (
    <section className="app-page flex flex-row justify-center pt-[88px] md:pt-[130px] lg:pt-[208px] lg:px-8 bg-black">
      <div className='w-full max-w-[1138px]'>
        <h5 className='font-h5 text-h5-sm md:text-h5-md lg:text-h5-lg tracking-h5-sm md:tracking-h5-md lg:tracking-h5-lg uppercase text-center md:text-left'>
          <span className='font-bold pr-2 opacity-40'>04</span> NASA {images.name} images
        </h5>
        {
          spinnerLoading
            ?
              <Circles
                height="80"
                width="80"
                color="#ffffff"
                ariaLabel="circles-loading"
                wrapperClass="justify-center items-center h-3/5"
                visible={true}
              />
            :
              <article className="columns-1 md:columns-3 lg:columns-4 gap-6 py-[32px]">
                {
                  images.links.map((imageSrc, i) => {
                    return <img src={imageSrc} alt="images from NASA" key={i} className="w-full pb-8" />
                  })
                }
              </article>
        }
      </div>
    </section>
  )
}