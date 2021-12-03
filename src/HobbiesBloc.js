import React from 'react';
import './App.css';
import Bloc from './Bloc';

const hobbies = [
  {
    image: 'https://img.icons8.com/ios/50/000000/torii.png',
    imgName: 'Japan Culture',
  },

  {
    image: 'https://img.icons8.com/ios/50/000000/food-bar.png',
    imgName: 'Food',
  },

  {
    image:
      'https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/48/000000/external-game-pad-home-activity-photo3ideastudio-lineal-photo3ideastudio.png',
    imgName: 'VideosGames',
  },

  {
    image:
      'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/48/000000/external-coding-interface-kiranshastry-lineal-kiranshastry.png',
    imgName: 'Coding',
  },

  {
    image: 'https://img.icons8.com/ios-filled/50/000000/running.png',
    imgName: 'Running',
  },

  {
    image: 'https://img.icons8.com/ios/50/000000/badminton.png',
    imgName: 'Badminton',
  },

  {
    image: 'https://img.icons8.com/ios/50/000000/trave-diary.png',
    imgName: 'Travel',
  },
];

const HobbiesBloc = () => {
  return (
    <section className='flexbox'>
      {hobbies.map((hobby, index) => (
        <Bloc className='oneBloc' key={index} {...hobby} />
      ))}
    </section>
  );
};

export default HobbiesBloc;
