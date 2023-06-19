import { useEffect, useState } from "react";


export default function useBackgroundImage({bgList}) {
  // the first item should always be the mobile image
  const [bgImage, setBgImage] = useState(bgList[0]);

  useEffect(() => {
    // update component state to trigger render
    function handleWindowResize() {
      const image = (window.innerWidth < 641) 
        ? bgList[0] 
        : (window.innerWidth < 770 && bgList.length == 3) 
          ? bgList[1] 
          : bgList[2];

      setBgImage(image);
    }

    // set a listener
    window.addEventListener('resize', handleWindowResize);

    // call hanldeWindowResize function so we load right image
    handleWindowResize();

    // clean up function
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // now we give back the chosen background image
  return bgImage;
}