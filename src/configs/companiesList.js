const companiesList = [
  {
    id: 0,
    name: 'Google',
    path: 'https://google.com',
    icon: require('../images/Google.png'),
    styles: {
      title: {
        fontSize: 25,
        color: 'green',
      },
      container: {
        flexDirection: 'row-reverse',
      },
    }
  },
  {
    id: 1,
    name: 'Apple',
    path: 'https://apple.com',
    icon: require('../images/Apple.png'),
    styles: {
      title: {
        fontSize: 10,
        color: 'black',
      },
      container: {
        flexDirection: 'column',
      },
    }
  },
  {
    id: 2,
    name: 'Yahoo!',
    path: 'https://yahoo.com',
    icon: require('../images/Yahoo.png'),
    styles: {
      title: {
        fontSize: 15,
        color: 'red',
      },
      container: {
        flexDirection: 'row',
      },
    }
  },
];

export default companiesList;