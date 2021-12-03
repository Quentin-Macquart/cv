const MySoftskills = () => {
  const softskills = [
    'Autonomous',
    'Adapting',
    'Fast learner',
    'Operations coordiation',
    'Design and Creativity',
    'Team building',
    'Curious',
    'English',
  ];

  return softskills.map((softskill) => {
    return <div className='onlySkill'> {softskill}</div>;
  });
};

export default MySoftskills;
