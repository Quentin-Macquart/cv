import React from 'react';
import './App.css';
import Bloc from './Bloc';

const contacts = [
  {
    image: 'https://img.icons8.com/color/48/000000/linkedin.png',
    imgName: 'Lkdn',
  },

  {
    image: 'https://img.icons8.com/ios-filled/48/000000/github.png',
    imgName: 'Github',
  },

  {
    image: 'https://img.icons8.com/ios/50/000000/address--v1.png',
    imgName: ' Lille, Saint-Quentin',
  },
];

const ContactBloc = () => {
  return (
    <section className='flexbox'>
      {contacts.map((contact, index) => (
        <Bloc className='oneBloc' key={index} {...contact} />
      ))}
    </section>
  );
};

export default ContactBloc;
