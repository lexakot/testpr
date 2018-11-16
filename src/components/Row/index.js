import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generateStyles } from '../../helpers';
import { Row, Title, Icon } from './styled';



const Field = ({ title, icon, path, onPress, styles }) =>

  <Row style={styles.container} onPress={() => onPress(path)}>
    <Title style={styles.title}>{title}</Title>
    <Icon source={icon} />
  </Row>

Field.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};

export default Field;

