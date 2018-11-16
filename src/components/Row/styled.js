import styled from 'styled-components';

export const Row = styled.TouchableOpacity`
  width: 100%;
  height: 75px;
  border-bottom-width: 1px;
  border-color: black;
  align-items: center;
  flex-direction: ${({ style }) => style.flexDirection};
`;

export const Title = styled.Text`
  font-size: ${({ style }) => style.fontSize};
  color: ${({ style }) => style.color};
`;

export const Icon = styled.Image`
  
`;