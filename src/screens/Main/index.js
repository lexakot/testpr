import React, { Component } from 'react';
import { Text, Linking } from 'react-native';

import companiesList from '@configs/companiesList';
import Row from '@components/Row';

import { Container } from './styled';

class App extends Component {

  openLink = (link) => {
    Linking.openURL(link);
  };

  render() {
    return (
      <Container>
        {companiesList.map((company, index) => 
            <Row 
              key={index} 
              icon={company.icon}
              title={company.name} 
              path={company.path}
              onPress={this.openLink}
              styles={company.styles}

            />       
        )}
      </Container>
    );
  }
}

export default App;

