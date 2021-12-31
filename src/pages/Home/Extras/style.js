import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  flex-direction: column;
`;

export const Card = styled.View`
  background-color: #f0f1f5;
  width: ${props => (props.width ? props.width : 80)}px;
  margin: 12px;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
`;

export const TextCard = styled.Text`
  font-size: ${props => (props.size ? props.size : 10)}px;
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  max-width: 90%;
`;

export const TextArea = styled.View`
  margin-bottom: 40px;
`;

export const ButtonMais = styled.TouchableOpacity`
  background: #840acc;
  padding: 10px 15px 10px 15px;
  border-radius: 24px;
  margin-right: auto;
`;

export const TextTitle = styled.Text`
  font-size: ${props => (props.size ? props.size : 10)}px;
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  padding: 20px;
`;
