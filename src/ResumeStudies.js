import React from 'react';
import './App.css';
import ResumeCard from './ResumeCard';

const studies = [
  {
    date: '09- 05/2022 :',
    where: 'Wild Code School',
    job: 'Reskilling as Web developer',
    description: 'Learn the job of a Web developer',
  },

  {
    date: '2016 :',
    where: 'URMA, Le Virolois',
    job: 'BTM Photography',
    description: 'Periodic training class, gratued as top of class',
  },

  {
    date: '2014 :',
    where: 'Jean Rostand School',
    job: 'BTS Photography',
    description: 'Studying photography, with 3 internships',
  },

  {
    date: '2012 :',
    where: 'Louis Blaringhem',
    job: 'BAC',
    description: 'Scientific section  With mention',
  },
];

const ResumeStudies = () => {
  return (
    <section className='content'>
      {studies.map((study, index) => (
        <ResumeCard key={index} {...study} />
      ))}
    </section>
  );
};

export default ResumeStudies;
