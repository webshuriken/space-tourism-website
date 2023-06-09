import './DestinationMenu.css';
import { useState } from 'react';


export default function DestinationMenu({list, handleClick}) {
  const [activeBtn, setActiveBtn] = useState(list[0].name);

  function loadNewDestination(name) {
    // ask parent to load data
    handleClick(name);
    // updates this menu
    setActiveBtn(name);
  }

  return (
    <ul className="flex justify-between w-[238px] md:w-[286px] pb-[4px] md:pb-[10px]">
      {
        list.map((destination, i) => {
          const activeBtnClass = destination.name === activeBtn ? 'active ' : '';
          return (
            <li key={i} className="relative">
              <button 
                onClick={(e) => loadNewDestination(e.target.value)} 
                value={destination.name}
                className={`${activeBtnClass}destination-menu__btn relative font-nav text-nav tracking-nav uppercase`}
              >
                {destination.name}
              </button>
            </li>
          );
        })
      }
    </ul>
  )
}