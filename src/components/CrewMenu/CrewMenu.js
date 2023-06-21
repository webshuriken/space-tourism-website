import './CrewMenu.css';
import { useState } from 'react';


export default function CrewMenu({crewList, handleClick}) {
  const [activeBtn, setActiveBtn] = useState(crewList[0].name);

  function loadMember(name) {
    // ask parent to load data
    handleClick(name);
    // updates this menu
    setActiveBtn(name);
  }

  return (
    <ul className="flex justify-between justify-self-center w-[88px] pt-[32px]">
      {
        crewList.map((member, i) => {
          const activeBtnClass = member.name === activeBtn ? 'active ' : '';
          return (
            <li key={i} className="relative">
              <button 
                onClick={(e) => loadMember(e.target.value)} 
                value={member.name}
                className={`${activeBtnClass}member-menu__btn relative h-[10px] w-[10px] bg-white rounded-full`}
                aria-label={member.name}
              ></button>
            </li>
          );
        })
      }
    </ul>
  )
}