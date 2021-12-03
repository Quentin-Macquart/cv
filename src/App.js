import './reset.css';
import Accordion from './components/accordion';
import Resume from './Resume';
import ResumeStudies from './ResumeStudies';
import KnowledgesBloc from './KnowledgesBloc';
import HobbiesBloc from './HobbiesBloc';
import Header from './Header';
import MySoftskills from './SoftSkills';
import MacquartQuentinwebdevCV from './MacquartQuentinwebdevCV.pdf';
import MyProjects from './MyProjects';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='accordion'>
        <Header />

        <div className='svgName'>
          <svg id='intro-weg' className='welcomeSvg'>
            <text x='50%' y='40%' text-anchor='middle'>
              Quentin
            </text>
          </svg>
          <svg id='intro-weg' className='welcomeSvg'>
            <text x='50%' y='40%' text-anchor='middle'>
              Macquart
            </text>
          </svg>
        </div>
        <section className='intro'>
          <h2 className='juniorDev'> Junior Web Developper</h2>
          <br />
          <p>
            Here's my print version, don't hesitate to{' '}
            <a
              href={MacquartQuentinwebdevCV}
              target='_blank'
              rel='noreferrer'
              className='download'
            >
              download
            </a>{' '}
            it!{' '}
          </p>
        </section>
        <div className='myWrapper'>
          <p className='scrollDown'>Scroll down to know me! </p>
        </div>
        {/* -----------------------------------------------------ABOUT--------------------------*/}

        <Accordion
          className='aboutMe'
          // image='https://img.icons8.com/officel/100/000000/user.png'
          title='About me'
          content="First of all, welcome to my resume! I am Quentin and i'm a junior web developer at Wild Code School since September 13rd of 2021. Since a long time ago, i always thought about how to create and develop things and i couldn't realise that coding allowed me to do that. I tried coding a few months ago and this made me realise that i was not in my place during the last 7 years, even if i was good at my jobs. Now, i got no time to loose anymore and i'm highly motivated to see, learn and applicate"
          content2='I am currently looking for an internship from Ferbruary 14th until June 10th. I am still available for opportunities. If you are interested, keep scrolling down'
        />

        {/* -----------------------------------------------------EXP--------------------------*/}
        <section className='bigBloc'>
          <Accordion
            // image='https://img.icons8.com/fluency/100/000000/internship.png'
            title='Experiences'
            content={<Resume />}
            content2=''
          />
        </section>

        {/* -----------------------------------------------------STUD--------------------------*/}

        <section className='bigBloc'>
          <Accordion
            // image='https://img.icons8.com/color/100/000000/graduation-cap.png'
            title='Studies'
            content={<ResumeStudies />}
            content2=''
          />
        </section>

        {/* -----------------------------------------------------KONW--------------------------*/}

        <Accordion
          // image='https://img.icons8.com/ios/100/000000/learning.png'
          title='Hards skills'
          content={<KnowledgesBloc />}
          content2=''
        />

        {/* -----------------------------------------------------Softskills--------------------------*/}
        <Accordion
          className='mySoftSkills'
          title='Soft skills'
          content={<MySoftskills />}
          content2=''
        />

        {/*---------------------------------My Projects----------------------------------------------*/}
        <section>
          <Accordion
            className='myProjects'
            title='Projects'
            content={<MyProjects />}
            content2=''
          />
        </section>

        {/* -----------------------------------------------------HOBBIES--------------------------*/}

        <section className='hobbies'>
          <Accordion
            className='myHobbies'
            // image='https://img.icons8.com/external-becris-solid-becris/100/000000/external-nature-coping-skills-becris-solid-becris.png'
            title='Hobbies'
            content={<HobbiesBloc />}
            content2=''
          />
        </section>
      </div>
    </div>
  );
}

export default App;
