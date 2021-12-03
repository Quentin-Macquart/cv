import React from 'react';
import './App.css';

const ResumeCard = ({ date, where, job, description }) => {
  return (
    <div>
      <p>
        <span className='job'>
          {' '}
          ,{job} <br />{' '}
        </span>{' '}
        <span className='at'>at</span> <span className='where'> {where} </span>{' '}
        - <br /> <span className='date'>{date}</span> <br />{' '}
        <span className='description'>{description}</span> <br /> <br />{' '}
      </p>
    </div>
  );
};

export default ResumeCard;
