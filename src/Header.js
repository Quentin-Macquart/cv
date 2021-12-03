const Footer = () => {
  const contacts = [
    {
      myHref: 'https://fr.linkedin.com/in/quentin-macquart-418934b1',
      myIcon: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
      myData: '',
    },

    {
      myHref: 'https://github.com/Quentin-Macquart',
      myIcon: 'https://img.icons8.com/ios-filled/48/000000/github.png',
      myData: '',
    },

    {
      myHref: 'tel:0664139114',
      myIcon: 'https://img.icons8.com/material-outlined/24/000000/phone.png',
      myData: '',
    },

    {
      myHref: null,
      myIcon: 'https://img.icons8.com/ios/50/000000/address--v1.png',
      myData: ' Lille',
    },
  ];

  return (
    <>
      <header className='header'>
        {contacts.map((contact) => (
          <a
            className='textToChange'
            target='_blank'
            href={contact.myHref}
            rel='noreferrer'
          >
            {' '}
            <img
              className='headerLogo'
              src={contact.myIcon}
              alt=''
            /> <br /> {contact.myData}
            <br />{' '}
          </a>
        ))}
        <div className='myHeader'>
          <div className='headerBande'> </div>
        </div>
      </header>
    </>
  );
};

export default Footer;
