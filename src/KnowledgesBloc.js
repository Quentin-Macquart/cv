import React from 'react';
import './App.css';
import Bloc from './Bloc';

const knowledges = [
  {
    image: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
    imgName: 'HTML',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/css3.png',
    imgName: 'CSS',
  },
  {
    image: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
    imgName: 'Javascript',
  },
  {
    image: 'https://img.icons8.com/officel/48/000000/react.png',
    imgName: 'React.js',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/nodejs.png',
    imgName: 'Node.js',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/mysql-logo.png',
    imgName: 'mySQL',
  },

  {
    image: 'https://img.icons8.com/ios-filled/48/000000/adobe-logo.png',
    imgName: 'Adobe Softwares',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/linux--v1.png',
    imgName: 'Linux',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/windows-logo.png',
    imgName: 'Windows',
  },

  {
    image: 'https://img.icons8.com/ios-glyphs/30/000000/mac-client.png',
    imgName: 'Macintosh',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/great-britain.png',
    imgName: 'English',
  },

  {
    image: 'https://img.icons8.com/color/48/000000/spain-2.png',
    imgName: 'Espagnol',
  },
];

const KnowledgesBloc = () => {
  return (
    <section className='flexbox'>
      {knowledges.map((knowledge, index) => (
        <Bloc className='oneBloc' key={index} {...knowledge} />
      ))}
    </section>
  );
};

export default KnowledgesBloc;
