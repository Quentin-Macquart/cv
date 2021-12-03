import React from 'react';
import { useState } from 'react';
import './accordion.css';

function Accordion({ title, image, content, content2 }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    console.log(e);
    setActive(!active);
  };
  return (
    <div class='container y proximity-scroll-snapping' dir='rtl'>
      <div className={`bloc ${active && 'active'}`}>
        <div className='cubeTitle' onClick={handleToggle}>
          <p className='titleBloc'>{title}</p>{' '}
          <span className='accordionIcon'> </span>
          <span className='accordionIcon2'> </span>
        </div>

        <img className='imgCube' alt='logo' src={image} />

        <div className='content' id='content'>
          {content}
        </div>
        <div className='content2'>{content2}</div>
      </div>
    </div>
  );
}

export default Accordion;
