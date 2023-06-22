import './TechnologyMenu.css';
import { useState } from 'react';


export default function TechnologyMenu({technologyList, handleClick}) {
  const [activeBtn, setActiveBtn] = useState(technologyList[0].name);

  function loadMember(name) {
    // ask parent to load data
    handleClick(name);
    // updates this menu
    setActiveBtn(name);
  }

  return (
    <ul className="flex justify-between w-[152px] pt-2 pb-2 md:w-[210px] lg:flex-col lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:h-[304px] lg:w-[80px]">
      {
        technologyList.map((tech, i) => {
          const activeBtnClass = tech.name === activeBtn ? 'active ' : '';
          const btnNumber = i + 1;
          return (
            <li key={i} className={`${activeBtnClass}technology-menu__item relative`} data-btn-value={btnNumber}>
              <button 
                onClick={(e) => loadMember(e.target.value)} 
                value={tech.name}
                className='technology-menu__btn relative h-[40px] w-[40px] text-[1.06rem] rounded-full overflow-hidden md:h-[60px] md:w-[60px] md:text-[1.6rem] lg:h-[80px] lg:w-[80px] lg:text-[2.14rem]'
                aria-label={tech.name}
              >{btnNumber}</button>
            </li>
          );
        })
      }
    </ul>
  )
}