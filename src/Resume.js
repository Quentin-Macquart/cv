import React from 'react';
import './App.css';
import ResumeCard from './ResumeCard';

const experiences = [
  {
    id: 1,
    date: '09/2017 - 09/2021 :',
    where: 'Vestiaire Collective',
    job: 'Photographer',
    description: 'Editorial work/ Operations coordination',
  },

  {
    id: 2,
    date: ' 03/2017 - 09/2017 :',
    where: 'Maison de la Photographie',
    job: 'Project Manager',
    description: 'Web communication/ Operations coordination',
  },

  {
    id: 3,
    date: '09/2016 - 02/2021 :',
    where: 'Showroomprivé',
    job: 'Photographer',
    description: 'Packshots/ Intern projects',
  },

  {
    id: 4,
    date: '12/2015 - 09/2016 :',
    where: 'Studio Contrejour',
    job: 'Photographer',
    description: 'Advertising/ Web and print content',
  },

  {
    id: 5,
    date: '08/2014 - 11/2015 :',
    where: 'Studio Reflexion',
    job: 'Photographer',
    description: 'Advertising/ Charged of editings ',
  },
];

const Resume = () => {
  return (
    <section className='content'>
      {experiences.map((experience, index) => (
        <ResumeCard key={index} {...experience} />
      ))}
    </section>
  );
};

export default Resume;
