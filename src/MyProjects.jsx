const MyProjects = () => {
  const projects = [
    {
      name: 'Wild Market',
      durationAndLevel: 'Level : 2weeks of coding - Practice: 2weeks',
      url: 'https://quentin-macquart.github.io/wildmarket/',
      description: 'E-commerce website around the WildCodeSchool',
    },
    {
      name: "Keep'N",
      durationAndLevel: 'Level : 1month of coding - Practice: 4weeks',
      url: 'https://wizardly-kowalevski-e32068.netlify.app/',
      description: 'Movie video Platform',
    },
    {
      name: 'OMGPLSSTT',
      durationAndLevel: 'Hackaton - Level: 2month 1/2 - Practice : 30hours',
      url: '',
      description: 'Video Games < Clicker type > around music theme',
    },
  ];

  return (
    <section className='content'>
      {projects.map((project) => {
        return (
          <div className='projectBloc'>
            <a
              className='projectTitle'
              href={project.url}
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              {project.name}{' '}
            </a>
            <p className='projectDescription'>{project.description}</p>
            <p className='durationAndLevel'>{project.durationAndLevel}</p>
            <br />
          </div>
        );
      })}
    </section>
  );
};

export default MyProjects;
